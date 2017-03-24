var React = require('react');

var Portfolio = React.createClass({
	render: function() {
		return(
			<section id="portfolio">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="titulo-contato">
		                        <h2>Portfólio</h2>
		                          <div className="divider">
								  	<i className="fa fa-picture-o"></i>
								 </div>
		                        <p>Esses são os projetos do quais fiz parte</p>
		                    </div>
		                    <div className="col-md-2">
		                    	<ul className="portfolio">
		                    		<li className="filter active" id="all">Todos</li>
		                    		<li className="filter" id="web">Web</li>
		                    		<li className="filter" id="design">Design</li>
		                    	</ul>
		                    </div>
		                    <div className="col-md-10">
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix web">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/catcher.jpg" title="Viagem e Turismo - Wordpress" className="portfolio-popup"><img src="../app/src/imagens/catcher.jpg" alt="Catcher"/></a>
			                    	</div>
			                    </div>
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix design">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/catcher.jpg" title="Viagem e Turismo - Wordpress" className="portfolio-popup"><img src="../app/src/imagens/catcher.jpg" alt="Catcher"/></a>
			                    	</div>
			                    </div>
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix web">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/catcher.jpg" title="Viagem e Turismo - Wordpress" className="portfolio-popup"><img src="../app/src/imagens/catcher.jpg" alt="Catcher"/></a>
			                    	</div>
			                    </div>
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix design">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/catcher.jpg" title="Viagem e Turismo - Wordpress" className="portfolio-popup"><img src="../app/src/imagens/catcher.jpg" alt="Catcher"/></a>
			                    	</div>
			                    </div>
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix web">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/catcher.jpg" title="Viagem e Turismo - Wordpress" className="portfolio-popup"><img src="../app/src/imagens/catcher.jpg" alt="Catcher"/></a>
			                    	</div>
			                    </div>
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix web">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/catcher.jpg" title="Viagem e Turismo - Wordpress" className="portfolio-popup"><img src="../app/src/imagens/catcher.jpg" alt="Catcher"/></a>
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

module.exports = Portfolio;