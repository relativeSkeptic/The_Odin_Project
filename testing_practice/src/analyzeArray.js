function analyzeArray(data) {
    let mid = 0;
    data.sort();
    for(let i = 0; i < data.length; i++) {
        mid += data[i];
    }
    mid = mid / data.length;

    let object = {
        average: mid,
        min: data[0],
        max: data[data.length - 1],
        length: data.length
    };

    return object;
}

module.exports = { analyzeArray };