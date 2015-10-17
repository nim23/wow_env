import esprima from 'esprima';
import estraverse from 'estraverse';
import escodegen from 'escodegen';
import fs from 'fs';
let code,
	filePath = '/Users/ngurung/project-cooper/www/app/settings/local.js';

export default function (env) {
	let comments,
			file = fs.readFileSync(filePath, 'utf-8');
	code = esprima.parse(file, {range: true, tokens: true, comment: true});
	comments = code.comments;
	estraverse.traverse(code, {
		enter (node) {
			if (node.type === 'Literal') {
				node.value = env;
				this.skip();
			}
		}
	});
	code = escodegen.attachComments(code, comments, code.tokens);
	code = escodegen.generate(code, { comments: true });
	fs.writeFileSync('/Users/ngurung/project-cooper/www/app/settings/local.js', code, 'utf-8');
}
