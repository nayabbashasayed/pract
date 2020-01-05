const p = document.querySelectorAll('p');

p.forEach((p)=>{
	console.log(p);
	p.textContent = '**';
});
