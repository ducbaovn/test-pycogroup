let chai = require('chai');
let expect = chai.expect;
let excercises = require('../index');
let data1 = {
    arrivals: [1, 3, 5],
    departures: [2, 6, 10],
    k: 1,
    output: false
};
let data2 = {
    arrivals: [1, 1, 5],
    departures: [2, 6, 10],
    k: 4,
    output: true
};
let data3 = {
    arrivals: [1, 1, 5],
    departures: [6, 10, 1e5],
    k: 2,
    output: false
};
let data4 = {
    arrivals: [1, 1, 5],
    departures: [2, 10, 1e5],
    k: 4,
    output: true
};

describe('Test Excercises', function() {
  describe('#hotelReservation(arrivals, departures, k)', function() {
    it('should not throw exception when input valid', function() {
        expect(() => excercises.hotelReservation([], [], 1)).not.to.throw("invalid parameters");
        expect(() => excercises.hotelReservation([1, 2], [2, 3], 1)).not.to.throw("invalid parameters");
    });
    it('should throw exception when input invalid arrivals', function() {
        expect(() => excercises.hotelReservation("a", [], 1)).to.throw("invalid parameters");
        expect(() => excercises.hotelReservation(["a"], [1], 1)).to.throw("invalid parameters");
        expect(() => excercises.hotelReservation([1e6], [1], 1)).to.throw("invalid parameters");
    });
    it('should throw exception when input invalid departure', function() {
        expect(() => excercises.hotelReservation([], 1, 1)).to.throw("invalid parameters");
        expect(() => excercises.hotelReservation([], ["a"], 1)).to.throw("invalid parameters");
        expect(() => excercises.hotelReservation([1], [1e6], 1)).to.throw("invalid parameters");
    });
    it('should throw exception when input invalid k', function() {
        expect(() => excercises.hotelReservation([], [], "a")).to.throw("invalid parameters");
        expect(() => excercises.hotelReservation([], [], -1)).to.throw("invalid parameters");
    });
    it('should throw exception when input invalid arrivals and departures length', function() {
        expect(() => excercises.hotelReservation([1], [3, 4], 1)).to.throw("invalid parameters");
        expect(() => excercises.hotelReservation([1, 3, 4], [5, 6], 1)).to.throw("invalid parameters");
    });
    it('should throw exception when input invalid arrival value and departure value', function() {
        expect(() => excercises.hotelReservation([1], [1], 1)).to.throw("invalid parameters");
        expect(() => excercises.hotelReservation([1], [2], 1)).not.to.throw("invalid parameters");
    });
    it(`should return ${data1.output} with data1`, function() {
        expect(excercises.hotelReservation(data1.arrivals, data1.departures, data1.k)).to.equal(data1.output);
    });
    it(`should return ${data2.output} with data2`, function() {
        expect(excercises.hotelReservation(data2.arrivals, data2.departures, data2.k)).to.equal(data2.output);
    });
    it(`should return ${data3.output} with data3`, function() {
        expect(excercises.hotelReservation(data3.arrivals, data3.departures, data3.k)).to.equal(data3.output);
    });
    it(`should return ${data4.output} with data4`, function() {
        expect(excercises.hotelReservation(data4.arrivals, data4.departures, data4.k)).to.equal(data4.output);
    });
  });
});