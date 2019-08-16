let utils = require("./utils");
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
    while (k > 0) {
        rotate90Degrees(image, n);
        k--;
    }
}
exports.hotelReservation = (arrivals, departures, k) => {
    const MIN_DAY = 1;
    const MAX_DAY = 100000; // ~300 years. We limit max day because of out of memory issue
    const MAX_GUEST = 1e9; // 1 billion. We limit max guest because of out of memory issue
    function validate(arrivals, departures, k) {
        if (!Array.isArray(arrivals) || !Array.isArray(departures) || !Number.isInteger(k) || k < 0) {
            return false;
        }
        let numberOfGuests = arrivals.length;
        if (departures.length !== numberOfGuests || numberOfGuests > MAX_GUEST) {
            return false;
        }
        for (let i = 0; i < arrivals.length; i++) {
            if (!Number.isInteger(arrivals[i]) || !Number.isInteger(departures[i])) {
                return false;
            }
            let arrival = arrivals[i];
            let departure = departures[i];
            if (arrival < MIN_DAY || arrival > MAX_DAY || departure < MIN_DAY || departure > MAX_DAY || arrival >= departure) {
                return false;
            }
        }
        return true;
    }
    if (!validate(arrivals, departures, k)) {
        throw new Error("invalid parameters");
    }
    let minArrival = utils.minOfArray(arrivals);
    let maxDeparture = utils.maxOfArray(departures);
    // assume check-in is 2pm, check-out is 12pm so if user check-in on 2pm day 1 and check-out on 12pm day 2, he stays 1 night
    let numberOfNights = maxDeparture - minArrival;
    let remainingRooms = [];

    // init remaining rooms for all night from minArrival to maxDeparture
    for (let i = 0; i < numberOfNights; i++) {
        remainingRooms[i] = k;
    }
    // traverse all guest to adjust remaining rooms
    for (let i = 0; i < arrivals.length; i++) {
        let arrival = arrivals[i];
        let departure = departures[i];
        // adjust remaining rooms from arrival to departure
        for (let j = arrival; j < departure; j++) {
            if (--remainingRooms[j - minArrival] < 0) return false;
        }
    }
    return true;
}