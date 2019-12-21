let multipleArg = (a, b, c) => {
        console.log(`a : ${a}`);
        console.log('b : ' + b);
        console.log('c : ' + c);
}

multipleArg(1); // a = 1, b and c are undefined
/* Passing only the second argument */
multipleArg(undefined, 2); // a and c are undefined. b = 2

