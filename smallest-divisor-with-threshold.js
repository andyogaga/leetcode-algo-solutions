/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  if (nums.length > threshold) return 1;
  const checkDivisor = (divisor) => {
    const total = nums.reduce((acc, curr) => {
      return acc + Math.ceil(curr / divisor);
    }, 0);
    console.log(total);
    return total <= threshold;
  };

  const binarySearch = (low, high) => {
    if (high <= 1) return [1, 1];
    while (checkDivisor((low + high) / 2) >= threshold) {
      low = (low + high) / 2;
    }
    return [low, high];
  };

  let low = 1;
  let high = Math.max(...nums);
  while (high - low > 50) {
    const [start, end] = binarySearch(low, high);
    console.log(start, end);
    low = start;
    high = end;
  }

  for (let i = low; i <= high; i++) {
    const isDivisor = checkDivisor(i);
    if (isDivisor) {
      return i;
    }
  }
};

console.log(smallestDivisor([91, 41, 78, 86, 8], 114));
