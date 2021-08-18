console.log("sea.js moduleB");
define(function (require, exports, module) {
  console.log("sea.js moduleB define");
  // 到处一个对象
  module.exports = {
    f1: function () {
      console.log("sea.js moduleB f1");
    },
    obj: {
      num: 666,
      str: "string",
    },
  };
});
