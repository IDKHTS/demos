const http = require("http");
fs = require("fs");
path = require("path");
url = require("url");

http
  .createServer(function (request, response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    // response.writeHead(200, { 'Content-Type': 'text/plain' });
    const pathName = url.parse(request.url).pathname;

    console.log(__dirname, pathName);
    const filePath = path.join(__dirname, pathName);

    fs.stat(filePath, function (err, stats) {
      if (!err && stats.isFile()) {
        //获取后缀名
        var i = filePath.lastIndexOf(".");
        var suffix = filePath.substr(i + 1, filePath.length);
        MIMEType = getMIMEType(suffix); // js文件MIME TYPE就为JavaScript
        console.log("MIMEType", MIMEType);

        console.log("200 ", request.url);
        response.writeHead(200, {
          "Content-type": "text/" + MIMEType,
        });

        fs.createReadStream(filePath).pipe(response);
      } else {
        console.log("404 ", request.url);
        response.writeHead(404);
        response.end(http.STATUS_CODES["404"]);
      }
    });

    // switch (request.url) {
    //     case '/':

    //     default:
    //         // 发送响应数据 "Hello World"
    //         response.end(request.url.anchor);
    // }
  })
  .listen(8080);

// 终端打印如下信息
console.log("Server running at http://127.0.0.1:8080/index.html");

function getMIMEType(suffix) {
  switch (suffix) {
    case "js": {
      return "javascript";
    }
    default:
      return suffix;
  }
}
