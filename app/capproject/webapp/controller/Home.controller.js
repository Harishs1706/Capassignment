sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "../model/formatter",
  "../model/constants"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Filter, FilterOperator, formatter, constants) {
    "use strict";

    return Controller.extend("capproject.controller.Home", {
      formatter: formatter,
      onInit: function () {
        this.oModel = this.getOwnerComponent().getModel();
        this.oModel = this.getOwnerComponent().getModel("leaveReportInfoModel");
        this.initJsonModel();

      },
      /* Initialize Json Model */
      initJsonModel: function () {
        this.oModel.setData(constants);
      },
      onSearch: function(oEvent) {
        const aFilter = [];
        const { userIdValue } = this.oModel.getData();
        const oList = this.byId("itemsTable");
        console.log('oList', oList);
        const oBinding = oList.getBinding("items");
        console.log('oBinding', oBinding);
        console.log('query given in the search bar:', userIdValue);
        if (userIdValue) {
          aFilter.push(
            new Filter("userId", FilterOperator.EQ, userIdValue)
          );
        }
       
        oBinding.filter(aFilter);
      }


    });
  });
