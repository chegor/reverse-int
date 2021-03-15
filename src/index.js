module.exports = function reverse (n) {
  let output = n.toString().split('').reverse().join('');
  output = parseInt(output, 10);
  return output;

}
