define(function () {
  console.log("moduleB");
  return {
    f1: function () {
      console.log("require.js moduleB f1");
    },
    obj: {
      num: 666,
      str: "string",
    },
  };
});
