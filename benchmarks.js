
function getrandom(n) {
  return Math.floor(Math.random() * n);
}

var output = {
  value1 : getrandom(100),
  nested : {
    value : getrandom(100)
  }
};
if (process.env.PULL_REQUEST) {
  var out = "";
  out += "value 1: " + output.value1.toString() +"\n";
  out += "nested.value" + output.nested.value.toString();
  console.log(out);
} else {
  console.log(JSON.stringify(output));
}
