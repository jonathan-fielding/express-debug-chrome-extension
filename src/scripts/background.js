// The chrome background page, 

/* global chrome */
/* eslint new-cap: ["error", { "capIsNewExceptionPattern": "^cryptoJS\.." }]*/

const CryptoJS = require('crypto-js');
const moment = require('./libraries/moment');
import { store } from './stores/index';

const ports = [];

chrome.runtime.onConnect.addListener(function (port) {
    if (port.name !== 'devtools') return;
    ports.push(port);
    // Remove port when destroyed (eg when devtools instance is closed)
    port.onDisconnect.addListener(function () {
        const i = ports.indexOf(port);
        if (i !== -1) ports.splice(i, 1);
    });

    updatedTab();
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    if (changeInfo.status === 'complete') {
        updatedTab();
    }
});

chrome.webRequest.onBeforeSendHeaders.addListener(
    addDebugHeaders,
    {
        urls: ['http://*/*', 'https://*/*'],
        types: ['main_frame'],
    },
    ['blocking', 'requestHeaders']
);

// Function to send a message to all views:
function notifyDevtools(message) {
    ports.forEach(function (port) {
        port.postMessage(message);
    });
}

function updatedTab() {
    chrome.tabs.query(
        { active: true, lastFocusedWindow: true },
        function (tabs) {
            if (tabs.length === 0) { 
                return;
            }

            const url = tabs[0].url;

            if (url.startsWith('chrome://')) {
                return false;
            }

            return notifyDevtools({
                url
            });
        }
    );
}

function addDebugHeaders(evt) {
    const datetime = moment().tz('Europe/London').floor(15, 'minutes').format('YYYY-MM-DD HH:mm');
    const pluginState = store.getState();
    const supportedSites = pluginState.sites;

    const tabUrl = evt.initiator;
    const theSite = supportedSites.filter(site => site.url === tabUrl);

    console.log(theSite);
    
    if (theSite.length) {
        const secretKey = theSite[0].key;
        const debugKey = new CryptoJS.HmacSHA1(datetime, secretKey).toString();

        // 'X-RequestId' is named as such to obscure it's real purpose, as it bypasses the cache
        const headers = [].concat(evt.requestHeaders, {
            name: 'X-RequestId',
            value: debugKey,
        });

        console.log(headers);

        return {
            requestHeaders: headers,
        };
    }

    return {};
}