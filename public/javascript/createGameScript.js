const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const game = urlParams.get("game");
var scriptSrc = "javascript/" + game + ".js";
var scriptTag = "<script id=\"gamescript\" type=\"text/javascript\" src=\"" + scriptSrc + "\"><" + "/script>";
document.writeln(scriptTag);