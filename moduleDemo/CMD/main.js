define(function (require, exports, module) {
  if (false) {
    // 代码不会执行到这里，但是可以通过chrome的network工具发现，moduleB已经被下载了，只是还没执行
    let mB = require("./moduleB");
    console.log({ mB });
  }
  let mA = require("./moduleA");
  console.log({ mA });
});
