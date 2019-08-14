let chai = require('chai');
let should = chai.should;
let expect = chai.expect;
let excercises = require('../index');
let data1 = [
    [0, 16, 255, 1, 8],
    [8, 128, 32, 2, 9],
    [0, 0, 0, 3, 10],
    [4, 5, 6, 7, 11],
    [12, 13, 14, 15, 16]
];
let data2 = [
    [0, 16, 255, 1, 8],
    [8, 128, 32, 2, 9],
    [0, 0, 0, 3, 10],
    [4, 5, 6, 7, 11],
    [12, 13, 14, 15, 16]
];
let rotateData2_90degrees = [
    [12, 4, 0, 8, 0],
    [13, 5, 0, 128, 16],
    [14, 6, 0, 32, 255],
    [15, 7, 3, 2, 1],
    [16, 11, 10, 9, 8]
];
let data3 = [
    [0, 16, 255, 1, 8],
    [8, 128, 32, 2, 9],
    [0, 0, 0, 3, 10],
    [4, 5, 6, 7, 11],
    [12, 13, 14, 15, 16]
];
let rotateData3_180degrees = [
    [16, 15, 14, 13, 12],
    [11, 7, 6, 5, 4],
    [10, 3, 0, 0, 0],
    [9, 2, 32, 128, 8],
    [8, 1, 255, 16, 0]
];
let data4 = [
    [0, 16, 255, 1, 8],
    [8, 128, 32, 2, 9],
    [0, 0, 0, 3, 10],
    [4, 5, 6, 7, 11],
    [12, 13, 14, 15, 16]
];
let rotateData4_270degrees = [
    [8, 9, 10, 11, 16],
    [1, 2, 3, 7, 15],
    [255, 32, 0, 6, 14],
    [16, 128, 0, 5, 13],
    [0, 8, 0, 4, 12]
]

describe('Test Excercises', function() {
  describe('#rotateImage(image, k)', function() {
    it('should throw exception when input invalid', function() {
        expect(() => excercises.rotateImage(["a"])).to.throw("invalid parameters");
        expect(() => excercises.rotateImage([1])).to.throw("invalid parameters");
        expect(() => excercises.rotateImage([[1]], "a")).to.throw("invalid parameters");
        expect(() => excercises.rotateImage([[1]], 1)).not.to.throw("invalid parameters");
        expect(() => excercises.rotateImage([[-1]], 1)).to.throw("invalid parameters");
        expect(() => excercises.rotateImage([[256]], 1)).to.throw("invalid parameters");
        expect(() => excercises.rotateImage([[255]], 1)).not.to.throw("invalid parameters");
        expect(() => excercises.rotateImage([[1, 2]], 1)).to.throw("invalid parameters");
        expect(() => excercises.rotateImage([[1, 2], [3, 4]], 1)).not.to.throw("invalid parameters");
        expect(() => excercises.rotateImage([[1, 2], [3, 4], [5, 6]], 1)).to.throw("invalid parameters");
    });
    it('should not rotate if input k = 4', function() {
        excercises.rotateImage(data1, 4);
        expect(data1).to.deep.equal(data1);
    });
    it('should rotate 90 degrees if input k = 1', function() {
        excercises.rotateImage(data2, 1);
        expect(data2).to.deep.equal(rotateData2_90degrees);
    });
    it('should rotate 180 degrees if input k = 10', function() {
        excercises.rotateImage(data3, 10);
        expect(data3).to.deep.equal(rotateData3_180degrees);
    });
    it('should rotate 270 degrees if input k = 7', function() {
        excercises.rotateImage(data4, 7);
        expect(data4).to.deep.equal(rotateData4_270degrees);
    });
  });
});