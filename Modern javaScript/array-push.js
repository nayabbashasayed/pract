let fundInfo = [
	{
		"Fund House" : "Axis Mutual Fund"
	},
	{
		"Fund House" : "SBI Mutual Fund"
	}
];

let schemes = [
	{
		"id" : "12",
		"onemore" : "34"
	},
	{
		"id" : "12",
		"onemore" : "34"
	}
];

fundInfo[0]["Schemes"] = schemes;

//console.log(JSON.stringify(fundInfo, null, 4));

const fundIndex = fundInfo.findIndex((fund) => {
	return fund["Fund House"] === "SBI Mutual Fund";
});

console.log(fundIndex);

fundInfo[fundIndex]["Schemes"] = schemes;

console.log(JSON.stringify(fundInfo, null, 4));


console.log('\n\n\n');
