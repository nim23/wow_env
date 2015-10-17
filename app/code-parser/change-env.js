import esprima from 'esprima';
import estraverse from 'estraverse';
import escodegen from 'escodegen';
import fs from 'browserify-fs';
let code,
	filePath = '/Users/ngurung/project-cooper/www/app/settings/local.js';

export default function (env) {
	fs.readFile(filePath, (err, file) => {
		code = esprima.parse(file);
		estraverse.replace(code, {
			enter: function(node, parent){
				// console.log(node);
				// this.skip();
				if(node.type === 'expression'){
						return esprima.parse(`{ local: ${env}}`);
				}
			}
		});
		console.log(code);
		console.log(escodegen.generate(code));
	});
	// escodegen.attachComments(code, code.comments, code.tokens);
}
