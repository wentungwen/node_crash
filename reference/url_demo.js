const url = require("url");
const myUrl = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=active"
);

// get custom Url
console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.pathname);

//query & param
console.log(myUrl.search);
console.log(myUrl.searchParams);
myUrl.searchParams.append("abc", 123);
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}:${value}`);
});
