
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (typeof matrix === "undefined") {
        return []
    }
  return matrix.reduce((result, element, index) => result.concat(index % 2 === 0 ? element : element.reverse()), []);
}
