let account = {
	name : 'Nayab',
	income : 0,
	expense : 0
};

let addExpense = (profile, expense) => {
	profile.expense += expense;
};

let addIncome = (profile, income) => {
	profile.income += income;
};

let getAccountSummary = (profile) => {
	let savings = profile.income - profile.expense;
	console.log(`${profile.name} has ${savings} in savings. Income ${profile.income} and expenses ${profile.expense}`);
};

let resetAccount = (profile) => {
	profile.income = 0;
	profile.expense = 0;
}

addIncome(account, 100);
getAccountSummary(account);
addIncome(account, 100);
getAccountSummary(account);
addExpense(account, 50);
getAccountSummary(account);
resetAccount(account);
getAccountSummary(account);
