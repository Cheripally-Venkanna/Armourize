// var url=require("url") 
// var fs=require("fs")
// var http=require("http")
// var adderss="http://localhost:3030/url1.js?name=cherry&country=india ";
// var part=url.parse(adderss,true);
// console.log(part.pathname);
// console.log(part.host);
// console.log(part.query)
// console.log(part.port)


const url = require('url');

const urlString = 'https://www.example.com:8080/path?query=value#fragment';
const parsedUrl = url.parse(urlString,false);

console.log(JSON.str(parsedUrl));
