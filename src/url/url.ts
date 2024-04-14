const myUrl = new URL("https://myWebsite.com/hello.html?id=106&status=active");

console.log(myUrl.href);

console.log(myUrl.toString());

console.log(myUrl.host);

console.log(myUrl.hostname);

console.log(myUrl.pathname);

console.log(myUrl.search);

console.log(myUrl.searchParams);

myUrl.searchParams.append("test", "abc");

console.log(myUrl.searchParams);

console.log(
  myUrl.searchParams.forEach((value, name) => console.log(name, value))
);
