// The intial JavaScript that loads the devtools panel

chrome.devtools.panels.create("Express Debug",
    "MyPanelIcon.png",
    "panel.html",
    function(extensionPanel) {
      let _window; // Going to hold the reference to panel.html's `window`
      const port = chrome.runtime.connect({ name: 'devtools' });

      port.onMessage.addListener(() => {
          // Write information to the panel, if exists.
          // If we don't have a panel reference (yet), queue the data.
          if (_window) {
              _window.messageListener();
          }
      });

      extensionPanel.onShown.addListener(function tmp(panelWindow) {
          _window = panelWindow;

          extensionPanel.onShown.removeListener(tmp); // Run once only
          panelWindow.messageListener();
      });
    }
);