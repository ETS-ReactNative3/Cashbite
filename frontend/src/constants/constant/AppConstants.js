"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
if (process.env.NODE_ENV == 'development') {
  exports.default = {
    // baseURL: "https://hyyzo.com/api",
    imageURL: "https://cdn.hyyzo.com/",
    baseURL: "http://localhost:5300/api",
    minRedeemBalance:"200",
  };
}
else {
  exports.default = {
    baseURL: "https://hyyzo.com/api",
    imageURL: "https://cdn.hyyzo.com/",
    minRedeemBalance:"200"
    // baseURL: "http://localhost:5300/api"
  };
}
