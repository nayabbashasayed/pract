const yargs = require('yargs');

yargs.version("1.1.1.1");

yargs.command({
	command : 'add',
	describe : '- Add a note',
	builder : {
		title : {
			alias : 't',
			describe : "Add note title",
			demandOption : true,
			type : 'string'
		},
		body : {
			alias : 'b',
			describe : 'Add the body message',
			demandOption : true,
			type : 'string'
		}
	},
	handler : add
});
yargs.command('remove', '- Remove a note', remove);
yargs.command('read', '- Read a note', read);
yargs.command('list', '- List notes', list);

yargs.parse();

function add(argv) {
	console.log('Title : ' + argv.title);
	console.log('Body : ' + argv.body);
}
function remove() {
	console.log("Note Removed");
}
function read() {
	console.log("Note Read");
}
function list() {
	console.log("Note Listed");
}
