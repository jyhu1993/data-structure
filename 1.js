// 求两数之和
// 两遍循环160ms
let twoSum = function(nums, target) {
  let len = nums.length;
  let arr = [];
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i, j);
        return arr;
      }
    }
  }
};
// 1108ms，比两遍循环还慢；
let twoSumForFindIndex = function(nums, target) {
  let len = nums.length;
  let arr = [];
  let j;
  for (let i = 0; i < len; i++) {
    j = nums.findIndex(function (value, index) {
      return target - nums[i] === value && index !== i;
    })
    if (j !== -1) {
      arr.push(i, j)
      return arr;
    }
  }
}

// 232ms, 慢
let twoSumForIndexOf = function(nums, target) {
  let len = nums.length;
  let arr = [];
  let j;
  for (let i = 0; i < len; i++) {
    j = nums.indexOf(target - nums[i]);
    if (j !== -1 && j !==i) {
      arr.push(i, j)
      return arr;
    }
  }
}

// 88ms，最快
let twoSumForMap = function(nums, target) {
  let len = nums.length;
  let arr = [];
  const map = new Map();
  for (let i = 0; i < len; i++) {
    map.set(nums[i], i)
  }
  for (let j = 0; j < len; j++) {
    const complement = target - nums[j];
    if (map.has(complement) && map.get(complement) !== j) {
      arr.push(j, map.get(complement));
      return arr;
    }
  }
}

let nums = [3,2,4], target = 6;
console.log('两遍循环：', twoSum(nums, target))
console.log('一遍循环+findIndex：', twoSumForFindIndex(nums, target))
console.log('一遍循环+indexOf：', twoSumForIndexOf(nums, target))
console.log('一遍循环+map', twoSumForMap(nums, target))

