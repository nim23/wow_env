import jsonFile from 'jsonfile';
const FILE = `${__dirname}/projects.json`;
let projects = jsonFile.readFileSync(FILE);

export default {

	getProjects() {
		return projects;
	},

	getFilePath(projectName) {
		let project = projects.find((element, index, projects)=> {
			return element.name === projectName;
		});
		return project.filePath;
	},

	addProject(name, filePath) {
		projects.push({
			name: name,
			filePath: filePath
		});
		jsonFile.writeFileSync(FILE, projects);
	}
};
