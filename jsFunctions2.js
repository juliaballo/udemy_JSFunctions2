//exercise 40 - Last Element Exercise
// DEFINE YOUR FUNCTION BELOW:
const lastElement = array => {
    if(array.length > 0) {
        return array.slice(-1)[0];
    } else {
        return null;
    }
}

//exercise 41 - Capitalize Exercise
// DEFINE YOUR FUNCTION BELOW:
const capitalize = str => {return str.charAt(0).toUpperCase() + str.slice(1)};

//exercise 42 - Sum Array Exercise
// DEFINE YOUR FUNCTION BELOW:
const sumArray = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//exercuse 42 - Days Of The Week Exercise
// DEFINE YOUR FUNCTION BELOW:
const returnDay = num => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        return null;
    } else {
        return days[num-1];
    }
}