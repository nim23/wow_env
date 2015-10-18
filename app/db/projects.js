import jsonFile from 'jsonfile';
const FILE = `${__dirname}/projects.json`;
let projects = jsonFile.readFileSync(FILE);

export default {

	getProjects() {
		return projects;
	},

	addProject(name, filePath) {
		projects.push({
			name: name,
			filePath: filePath
		});
		jsonFile.writeFileSync(FILE, projects);
	}
};
