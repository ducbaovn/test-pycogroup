let chai = require('chai');
let expect = chai.expect;
let excercises = require('../index');
let data1 = {
    image: [
        [0, 16, 255, 1, 8],
        [8, 128, 32, 2, 9],
        [0, 0, 0, 3, 10],
        [4, 5, 6, 7, 11],
        [12, 13, 14, 15, 16]
    ],
    k: 4,
    output: [
        [0, 16, 255, 1, 8],
        [8, 128, 32, 2, 9],
        [0, 0, 0, 3, 10],
        [4, 5, 6, 7, 11],
        [12, 13, 14, 15, 16]
    ]
};
let data2 = {
    image: [
        [0, 16, 255, 1, 8],
        [8, 128, 32, 2, 9],
        [0, 0, 0, 3, 10],
        [4, 5, 6, 7, 11],
        [12, 13, 14, 15, 16]
    ],
    k: 1,
    output: [
        [12, 4, 0, 8, 0],
        [13, 5, 0, 128, 16],
        [14, 6, 0, 32, 255],
        [15, 7, 3, 2, 1],
        [16, 11, 10, 9, 8]
    ]
};
let data3 = {
    image: [
        [0, 16, 255, 1, 8],
        [8, 128, 32, 2, 9],
        [0, 0, 0, 3, 10],
        [4, 5, 6, 7, 11],
        [12, 13, 14, 15, 16]
    ],
    k: 10,
    output: [
        [16, 15, 14, 13, 12],
        [11, 7, 6, 5, 4],
        [10, 3, 0, 0, 0],
        [9, 2, 32, 128, 8],
        [8, 1, 255, 16, 0]
    ]
};
let data4 = {
    image: [
        [0, 16, 255, 1, 8],
        [8, 128, 32, 2, 9],
        [0, 0, 0, 3, 10],
        [4, 5, 6, 7, 11],
        [12, 13, 14, 15, 16]
    ],
    k: 7,
    output: [
        [8, 9, 10, 11, 16],
        [1, 2, 3, 7, 15],
        [255, 32, 0, 6, 14],
        [16, 128, 0, 5, 13],
        [0, 8, 0, 4, 12]
    ]
};

describe('Test Excercises', function() {
  describe('#rotateImage(image, k)', function() {
    it('should throw exception when data invalid', function() {
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
    it('should not rotate if data k = 4', function() {
        excercises.rotateImage(data1.image, data1.k);
        expect(data1.image).to.deep.equal(data1.output);
    });
    it('should rotate 90 degrees if data k = 1', function() {
        excercises.rotateImage(data2.image, data2.k);
        expect(data2.image).to.deep.equal(data2.output);
    });
    it('should rotate 180 degrees if data k = 10', function() {
        excercises.rotateImage(data3.image, data3.k);
        expect(data3.image).to.deep.equal(data3.output);
    });
    it('should rotate 270 degrees if data k = 7', function() {
        excercises.rotateImage(data4.image, data4.k);
        expect(data4.image).to.deep.equal(data4.output);
    });
  });
});