sap.ui.define([
  "sap/ui/core/mvc/Controller"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("capproject.controller.Home", {
      onInit: function () {
        this.oModel = this.getOwnerComponent().getModel();

      },
      onItemPress: function (oEvent) {
        var param = oEvent.getSource();
        if (param) {
          var id = param.getBindingContext();
          if (id) {
            var hh = id.getProperty('userId');
            console.log(hh);
          }
        }
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("Details", {
          userId: hh
        });

      }
    });
  });
