/**
 * @param {number[]} nums
 * @return {number}
 */
 var mostFrequentEven = function (nums) {
    let map = new Map, max = 0, res = -1
    for (let i of nums) {
        if (i % 2 == 0) {
            if (map.get(i)) {
                map.set(i, map.get(i) + 1)
            }
            else map.set(i, 1)
            if (map.get(i) > max||(map.get(i)==max&&i<res)) {
                max = map.get(i)
                res = i
            }
        }
    }
    return res
};
console.log(mostFrequentEven([4,4,4,9,2,4]))