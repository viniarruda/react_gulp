var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var Sobre = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();

		GitHubUser.getByUsername(this.refs.username).then(function(response){
			this.props.updateUser(response.data);
		}.bind(this));

		GitHubUser.getReposByUsername(this.refs.username).then(function(response){
			this.props.updateRepos(response.data);
		}.bind(this));
	},

	render: function() {
		return(
			<section id="sobre">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
		                    <div className="titulo-contato">
		                        <h2>Sobre</h2>
		                          <div className="divider">
								  	<i className="fa fa-envelope-open"></i>
								 </div>
		                        <p>Saiba um pouco sobre mim</p>
		                    </div>
				            <div className="col-md-6">
				            	<div className="avatar">
				            		<img src="../app/src/imagens/law.png" alt="Avatar Vinícius"/>
				            	</div>
				            	<div className="box-habilidades">
				            		<a href="#habilidades">Habilidades</a>
				            	</div>
				            </div>
				            <div className="col-md-6">
				            	<div className="links">
				            		<div className="social">
					            		<h3>Me encontre nas Redes Sociais</h3>
							            <ul>
											<li className="facebook"><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
											<li className="linkedin"><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
											<li className="google-plus"><a href="#" target="_blank"><i className="fa fa-google"></i></a></li>
										</ul>
						            	<form onSubmit={this.handleSubmit}>
							            	<button type="submit" className="btn btn-primary github-btn github"><i className="fa fa-github"></i></button>
							            </form>
									</div>
						           	<div className="resumo">
					            		<p>Me chamo Vinícius Arruda de Souza e tenho 20 anos, estou cursando o 4º ano de Sistemas de Informação na FIAP. Trabalho com Web a cerca de 2 anos e meio e sempre estou em busca de melhores práticas e conhecimentos. Já participei de diversos projetos onde utilizavam diferentes tipos de tecnologias, você pode saber um pouco mais sobre eles olhando em meu portfólio.</p>
					            	</div>
						        </div>
				            </div>
		                </div>
					</div>
				</div>
			</section>
		)
	}
});

Sobre.propTypes = {
	updateUser: React.PropTypes.func.isRequired,
	updateRepos: React.PropTypes.func.isRequired,
};
	
module.exports = Sobre;