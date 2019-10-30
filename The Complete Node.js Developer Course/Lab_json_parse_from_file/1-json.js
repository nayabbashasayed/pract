const fs = require('fs');

var jsonBuffer = fs.readFileSync("1-json.json");

var jsonData = JSON.parse(jsonBuffer.toString());

console.log(jsonData.name);

jsonData.name = "Basha";
jsonData.age = "20";

var jsonString = JSON.stringify(jsonData);
fs.writeFileSync("1-json.json", jsonString);
