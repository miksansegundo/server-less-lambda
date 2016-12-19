"use strict";
exports.parser = function (event) {
    return {
        data: event.data,
        path: event.path,
        stage: event.stage,
        params: JSON.parse(event.params || "{}")
    };
};
