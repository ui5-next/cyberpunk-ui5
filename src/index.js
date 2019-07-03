// you must import React for react create function
import React from "react";
import ReactControl from "./controls/ReactControl";
import App from "sap/m/App";
import Page from "sap/m/Page";
import { ApplicationStore as store } from "./store/Store";
import SimpleNote from "./components/SimpleNote";

const app: App = <App
  pages={
    <Page title="cyber punk ui5" >
      <ReactControl store={store}>
        <p>Hello World, This is a React paragraph</p>
        <SimpleNote simpleNote="Note From Props" />
      </ReactControl>
    </Page>
  }
/>;

app.placeAt("content");