exports.minOfArray = (arr) => {
    let n = arr.length;
    if (n < 1) return null;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
exports.maxOfArray = (arr) => {
    let n = arr.length;
    if (n < 1) return null;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}