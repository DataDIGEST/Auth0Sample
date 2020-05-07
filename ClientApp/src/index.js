import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./utils/history";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as settingsApi from "./api/settingsApi";
import { Auth0Provider } from "./react-auth0-spa";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

settingsApi
  .getAuthSettings()
  .then((authSettings) => {
    ReactDOM.render(
      <Auth0Provider
        domain={authSettings.domain}
        client_id={authSettings.clientId}
        audience={authSettings.audience}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <Router basename={baseUrl} history={history}>
          <App />
        </Router>
      </Auth0Provider>,
      rootElement
    );
  })
  .catch((error) => {
    console.log(error);
  });

registerServiceWorker();
