function avgArray(listArray) {
    var total = 0;
    for(var i = 0; i < list.length; i++) {
    total = total + list[i];
    }
    var avg = total / list.length;
    return avg
}
const list = [];
let min,max,averageNew ;

while (true) {
    let number = prompt("Enter an integer (a negative integer to quit):")
    number = Number(number);

    if (Number.isInteger(number) == false || !number ) {
        continue;
    }
    else if (Number(number) >= 0) {
        if (number != null ) {
            list.push(number);
        } else {
            continue;
        }
    } 
    else if (Number(number) < 0) {
        break;
    }
}

let numAvg = avgArray(list);
min = Math.min.apply(null, list);
max = Math.max.apply(null, list);


if (list.length == 0) {
    alert("For the list that is empty, the average is 0, the minimim is 0, and the maximum is 0");
} else {
    alert("For the list " + list + ", the average is " + numAvg.toFixed(2) +
     ", the minimum is " + min +  ", and the maximum is " + max);
}