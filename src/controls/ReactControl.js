import Control from "sap/ui/core/Control";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReduxModel from "../store/redux/ReduxModel";

/**
 * ReactControl is a connector to connect UI5 and React
 */
export default class ReactControl extends Control {

  metadata = {

    properties: {
      content: {
        type: "any",
        defaultValue: []
      },
      store: {
        type: "any"
      },
      width: {
        type: "sap.ui.core.CSSSize",
        group: "Appearance",
        defaultValue: "100%"
      },
      height: {
        type: "sap.ui.core.CSSSize",
        group: "Appearance",
        defaultValue: "100%"
      }
    },

    events: {

    }

  }

  init() {

    super.init();

    this._innerDomRef = document.createElement("div");
    this._innerDomRef.style.height = "100%";
    this._innerDomRef.style.width = "100%";

  }

  onAfterRendering() {
    this._setup();
  }

  _setup() {
    const oDomRef: Element = this.getDomRef();

    var store = this.getStore();

    if (store instanceof ReduxModel) {
      store = store.getStore();
    }

    if(store){
      ReactDOM.render(
        <Provider store={store}>{this.getContent()}</Provider>,
        this._innerDomRef
      );
    } else {
      ReactDOM.render(
        <div>{this.getContent()}</div>,
        this._innerDomRef
      );
    }


    oDomRef.appendChild(this._innerDomRef);
  }

  renderer(oRm, oControl) {
    oRm.write("<div ");
    oRm.writeControlData(oControl);
    oRm.addStyle("width", oControl.getWidth());
    oRm.addStyle("height", oControl.getHeight());
    oRm.writeStyles();
    oRm.writeClasses();
    oRm.write(">");
    oRm.write("</div>");
  }

  exit() {
    jQuery(this._innerDomRef).remove();
    this._innerDomRef = null;
  }

}