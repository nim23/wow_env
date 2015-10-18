import esprima from 'esprima';
import estraverse from 'estraverse';
import fs from 'fs';

export default function (project, filePath) {
	let env,
		file = fs.readFileSync(filePath, 'utf-8');

	estraverse.traverse(esprima.parse(file), {
		enter (node) {
			if (node.type === 'Literal') {
				env = node.value;
				this.skip();
			}
		}
	});

	return env;
}
