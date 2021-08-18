define(function () {
  console.log("moduleA");
  return {
    f1: function () {
      console.log("require.js moduleA f1");
    },
    obj: {
      num: 666,
      str: "string",
    },
  };
});
