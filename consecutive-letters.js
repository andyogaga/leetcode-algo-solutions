/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  if (s.length < 1) return 0;
  if (s.length === 1) return 1;
  let max = 0;
  let count = 1;
  s.split("").map((cur, index) => {
    if (s[index - 1] === cur) {
      count++;
    } else {
      count = 1;
    }
    max = Math.max(max, count);
    return cur;
  });
  return max;
};

console.log(maxPower("abbcceeeffgkllnnoooppqqrrssttuuvvwwyzz"));
