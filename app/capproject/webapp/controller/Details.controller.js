sap.ui.define([
    "sap/ui/core/mvc/Controller",
   
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, formatter, constants) {
        "use strict";

        return Controller.extend("capproject.controller.Details", {
            
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                this.oModel = this.getOwnerComponent().getModel("leaveReportInfoModel");
                oRouter.getRoute("Details");
                this.initJsonModel();

            }
            
        });
    });

