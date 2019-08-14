exports.rotateImage = (image, k) => {
    function validate(matrix, k) {
        if (!Array.isArray(matrix) || !Number.isInteger(k)) {
            return false;
        }
        let n = matrix.length;
        for (let i = 0; i < n; i++) {
            if (!Array.isArray(matrix[i]) || matrix[i].length !== n) {
                return false;
            }
            for (let j = 0; j < n; j++) {
                if (!Number.isInteger(matrix[i][j]) || matrix[i][j] < 0 || matrix[i][j] > 255) {
                    return false;
                }
            }
        }
        return true;
    }
    function rotate90Degrees(matrix, n) {
        // first square is formed by first top row, last column, last row and first column
        // second square is formed by 2nd top row, 2nd last column, 2nd last row and 2nd column
        // ...
        let numberOfSquare = Math.floor(n/2);
        for (let i = 0; i < numberOfSquare; i++) {
            for (let j = i; j < n - i - 1; j++) {
                // store current point
                let temp = matrix[i][j];
                // move point value from left to top
                matrix[i][j] = matrix[n - 1 - j][i];
                // move point value from bottom to left
                matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
                // move point value from right to bottom
                matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
                // move point value from top (store by temp) to right
                matrix[j][n - 1 - i] = temp;
            }
        }
    }
    if (!validate(image, k)) {
        throw new Error("invalid parameters");
    }
    k = k % 4;
    let n = image.length;
    if (k === 0) return image;
    while (k > 0) {
        rotate90Degrees(image, n);
        k--;
    }
}