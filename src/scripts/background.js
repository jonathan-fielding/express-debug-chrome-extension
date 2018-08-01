// The chrome background page, 

/* global chrome */
/* eslint new-cap: ["error", { "capIsNewExceptionPattern": "^cryptoJS\.." }]*/

const cryptoJS = require('crypto-js');
const moment = require('./libraries/moment');

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
    const currentKey = cryptoJS.HmacSHA1(datetime, 'rBiycQDurzDmaLaKGrPCxwYFfgmxnuadPhddidvg2XAvhCUiZHProzPqpVYwsZbD').toString();

    console.log('addDebugHeaders');

    // 'X-RequestId' is named as such to obscure it's real purpose, as it bypasses the cache
    const headers = [].concat(evt.requestHeaders, {
        name: 'X-RequestId',
        value: currentKey,
    });

    return {
        requestHeaders: headers,
    };
}

chrome.storage.sync.set({key: 'test'}, function(value) {
    console.log('Value is set to ' + value);
});