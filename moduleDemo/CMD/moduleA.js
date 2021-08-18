console.log("sea.js moduleA");
define(function (require, exports, module) {
  console.log("sea.js moduleB define");
  // 导出一个对象
  exports.Obj = {
    f1: function () {
      console.log("sea.js moduleA f1");
    },
    obj: {
      num: 666,
      str: "string",
    },
  };
});
