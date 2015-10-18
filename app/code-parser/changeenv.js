import esprima from 'esprima';
import estraverse from 'estraverse';
import escodegen from 'escodegen';
import fs from 'fs';

export default function (env, filePath) {
	let code,
		comments,
		file = fs.readFileSync(filePath, 'utf-8');

	code = esprima.parse(file, {range: true, tokens: true, comment: true});
	comments = code.comments;
	estraverse.traverse(code, {
		enter (node) {
			if (node.type === 'Literal' && parent.key.name === 'environment') {
				node.value = env;
				this.skip();
			}
		}
	});

	code = escodegen.attachComments(code, comments, code.tokens);
	code = escodegen.generate(code, { comment: true, format: { json: true } });
	fs.writeFileSync(filePath, code, 'utf-8');
}
