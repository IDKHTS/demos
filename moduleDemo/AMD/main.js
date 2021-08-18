define(["moduleA", "moduleB"], function (moduleA, moduleB) {
  if (false) {
    // 代码不会执行到这里，但是可以通过chrome的network工具发现，moduleB已经被下载和执行了
    console.log({ moduleB });
  }
  console.log({ moduleA });
});