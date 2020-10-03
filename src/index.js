exports.min = function min (arr) {
    if (!Array.isArray(arr) || arr.length == 0) {
        return 0;
    }
    var min = arr[0];
    
    for (var i=0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];  
        }
    }
    return min;
}

exports.max = function max (arr) {
    if (!Array.isArray(arr) || arr.length == 0) {
        return 0;
    }
    var max = arr[0];
    for (var i=0; i < arr.length; i++) {
        if (arr[i] >= max) {
         max = arr[i];}
    }
    return max;
}

exports.avg = function avg (arr) {
    if (!Array.isArray(arr) || arr.length == 0) {
        return 0;
    }
    var count = 0;
    var total = 0;
    for (var i=0; i < arr.length; i++)  {
        if (arr[i] !== undefined) {
            count ++;
            total += arr [i];
                }
    }
    var avg = total / count;
    return avg;
}