import axios from './api';
const formService = {
	async postForm(formData) {
		return (await axios.post('register', formData)).data;
	},
};

export default formService;
