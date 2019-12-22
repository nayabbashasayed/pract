const myArr = ['string', 20, true];

console.log(`Array : [${myArr}]\nArray length : ${myArr.length}`);

myArr.push(50);

console.log(`Array : [${myArr}]\nArray length : ${myArr.length}`);

myArr.splice(1, 1, 'Should replace second element');

console.log(`Array : ${myArr}\nArray length : ${myArr.length}`);
console.log(myArr);

myArr.forEach((x, i) => {
	console.log(`Index ${i}: Value ${x}`);
	console.log(arr);
});
