import axios from './api';

const StudentsService = {
	async getData(param) {
		return (await axios.get(param)).data;
	},

	async acceptUser(id) {
		return (await axios.post('/on-register/accept/' + id)).data;
	},

	async cancelUser(id) {
		return (await axios.delete('/on-register/cancel/' + id)).data;
	},

	async deleteStudent(id) {
		return (await axios.delete('on-process/delete/' + id)).data;
	},
	async deleteMany(which, ids) {
		return (
			await axios.delete(
				which + '/delete-many?' + ids.map(id => 'id=' + id).join('&')
			)
		).data;
	},
};

export default StudentsService;
