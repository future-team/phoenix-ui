/**
 * Created by mac on 16/1/3.
 */
"use strict";

exports.__esModule = true;

exports["default"] = function (obj) {
    var methods = {
        initCallback: true,
        loadedCallback: true,
        closeCallback: true,
        successCallback: true,
        cancelCallback: true,
        checkedCallback: true,
        activeCallback: true,
        getValueCallback: true,

        updateCallback: true,
        deleteCallback: true,
        queryCallback: true,
        addCallback: true,
        insertCallback: true,
        ajaxCallback: true,

        defaultCallback: true

        //method
    };

    obj.prototype.methods = methods;
};

module.exports = exports["default"];