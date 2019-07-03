# Cyberpunk UI5

[![Netlify Status](https://api.netlify.com/api/v1/badges/393d02f2-6433-465f-8850-055b8da9d60d/deploy-status)](https://zealous-einstein-4e192b.netlify.com/)

Cyberpunk UI5 demo project, write UI5 application in a cyberpunk way.

## Quick View

Just use react/redux in UI5 project as you want.

```jsx
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
```

## Quick Start

Clone this repository and just run:

```bash
npm install
npm start
```