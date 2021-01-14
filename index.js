#!/usr/bin/env node
// that line was because we're editing a CLI (command line tool)
// remember to also add "bin" to package.json and run npm link in the command line

const Runner = require('./runner');
const runner = new Runner();

// node may or may not be able to run top level await commands so we have to wrap it inside a function depending on the version of node we are running
const run = async () => {
	const results = await runner.collectFiles(process.cwd());
	console.log(results);
};

run();
