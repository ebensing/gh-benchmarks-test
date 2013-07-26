
function getrandom(n) {
  return Math.floor(Math.random() * n);
}

var output = {
  value1 : getrandom(100),
  nested : {
    value : getrandom(100)
  }
};

console.log(JSON.stringify(output));
