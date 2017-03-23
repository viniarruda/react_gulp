var React = require('react');
var GitHubRepos = require('./GitHubRepos');

function GitHub(props) {
	var userInfo = props.user ?
		(
			<section id="github">
				<div className="container">
					<div className="col-lg-4 margin-git">
	                	<img className="img-circle" src={props.user.avatar_url} alt="avatar" width="140" height="140" />
				        <h2>{props.user.login}</h2>
				        <p>{props.user.name}</p>
				        <p>Followers: {props.user.followers} / Following: {props.user.following}</p>
				        <p><a className="btn btn-default" href={props.user.html_url} role="button">View details</a></p>
	                </div>
	                <div className="col-lg-8 margin-bottom">
	                	<GitHubRepos repos={props.repos} />
	                </div>
	            </div>
	        </section>

		) : null;

		return userInfo;
}

GitHub.propTypes = {
	user: React.PropTypes.object,
	repos: React.PropTypes.array,
};

module.exports = GitHub;