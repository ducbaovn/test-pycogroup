# test-pycogroup
This is a module with 2 function rotateImage and hotelReservation to solve 2 problem:
#### 1. Rotate Image:
A feature to rotate the photo on user request.
For simplicity, let’s assume the photo to be 2D square grid n * n (rows * columns) and each pixel can store 8 bits values (ranging between 0 to 255)
Rotating once should rotate the pixel elements by 90 degrees clockwise. This rotation operation can be called any number of times.
#### 2. Hotel Reservation:
A hotel manager has to process N bookings of rooms for the next season. His hotel has K rooms. Bookings contain an arrival date and a departure date. He wants to find out whether there are enough rooms in the hotel to satisfy the demand.
## Installation
```
npm install
npm install -g mocha
```
## Running the test
```
mocha
```
You can add more test case to 2 files ./test/rotateImage.js and ./test/hotelReservation.js
## Complexity
1. Rotate Image:
- validate function: O(n^2)
- main function:
    * k divisible by 4: O(1)
    * k not divisible by 4: O(n^2)
- summary: O(n^2)
2. Hotel Reservation:
- validate function: O(n)
- main function: O(m*n) with m = maxDeparture - minArrival
- summary: O(m*n)