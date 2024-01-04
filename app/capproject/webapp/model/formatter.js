sap.ui.define([
    "sap/ui/core/format/DateFormat"], function (DateFormat) {
        "use strict";

        return {

            convertStringToDate: function (data) {
                const parsedDate = Date.parse(data);
                const formatter = DateFormat.getDateTimeInstance({
                    style: "medium"
                });
                if (!isNaN(parsedDate)) {
                    // `data` is valid date
                    const dateObj = new Date(parsedDate);
                    const formattedDate = formatter.format(dateObj);
                    return formattedDate;
                } else {
                    // `data` is not valid date 
                    const parsedString = parseInt(data.substr(6));
                    const dateObj = new Date(parsedString);
                    const formattedDate = formatter.format(dateObj);
                    return formattedDate;
                }
            }
        }
    })