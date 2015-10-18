import esprima from 'esprima';
import estraverse from 'estraverse';
import fs from 'fs';

export default function (project, filePath) {
	let env,
		file = fs.readFileSync(filePath, 'utf-8');

	estraverse.traverse(esprima.parse(file), {
		enter (node, parent) {
			if (node.type === 'Literal' && parent.key.name === 'environment') {
				env = node.value;
				this.skip();
			}
		}
	});

	return env;
}
