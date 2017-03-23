var React = require('react');
var Header = require('./Header');
var Sobre = require('./Sobre');
var GitHub = require('./GitHub');
var Portfolio = require('./Portfolio');
var Depoimentos = require('./Depoimentos');
var Contato = require('./Contato');
var Footer = require('./Footer');

var Container = React.createClass({
	getInitialState: function() {
		return {
	      user: null,
	      repos: [],
		};
	},
	updateUser: function(user) {
		this.setState({user: user});
	},
	updateRepos: function(repos) {
		this.setState({repos: repos});
	},
	render: function() {
		return (
			<div>
				<Header />
				<Sobre 
					updateUser={this.updateUser} 
					updateRepos={this.updateRepos}
				/>
				<GitHub 
		            user={this.state.user}
          			repos={this.state.repos}
		        /> 
				<Portfolio />
				<Depoimentos />
				<Contato />
				<Footer />
			</div>
		);
	}
});

module.exports = Container;