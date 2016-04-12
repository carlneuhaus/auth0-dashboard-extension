import React from 'react';
import ReactDOM from 'react-dom';
import domready from 'domready';

(function() {
  var appRootContainer;

  function start(appRootEle) {
    appRootContainer = appRootEle;
    render();
    setupHotModuleReload();
  }

  function render() {
    const AppRoot = require('../components/AppRoot').default;
    ReactDOM.render(<AppRoot/>, appRootContainer);
  }

  function setupHotModuleReload() {
    module.hot && module.hot.accept('../components/AppRoot', () => setTimeout(hotReload));
  }

  function hotReload() {
    try {
      render();
    } catch (error) {
      renderError(error);
    }
  }

  function renderError(error) {
    console.error(error);
  }

  domready(() => start(document.getElementById('app-container')));
})();
