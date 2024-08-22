function analyseArray(array) {
  if (array === undefined) {
    throw new Error("Must provide an array");
  }

  return {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };
}

function getAverage(array) {
  if (!array.length) {
    return null;
  }

  return array.reduce((prev, curr) => prev + curr, 0) / array.length;
}

function getMin(array) {
  if (!array.length) {
    return null;
  }

  return Math.min(...array);
}

function getMax(array) {
  if (!array.length) {
    return null;
  }

  return Math.max(...array);
}

export default analyseArray;
