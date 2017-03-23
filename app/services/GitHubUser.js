var axios = require('axios');

var GitHubUser = {
	getByUsername: function() {
		return axios.get('https://api.github.com/users/viniarruda');
	},
	getReposByUsername: function() {
		return axios.get('https://api.github.com/users/viniarruda/repos');
	}
};

module.exports = GitHubUser;