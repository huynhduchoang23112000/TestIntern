function numberSum(firstNumber, secondNumber) {
    var sum = 0;
    for (var i = firstNumber; i <= secondNumber ; i++) {
        sum+=i;
    }
    return sum;
}

 function calcDoubleNumber(firstNumber, secondNumber ) {
    let result = numberSum(firstNumber,secondNumber);
    result = result * 2;
    return result;
}