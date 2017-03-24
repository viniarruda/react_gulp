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
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="projetos">
		                    		<img src="../app/src/imagens/catcher.jpg" alt="" />
		                    		<p>Quatro Rodas - Wordpress</p>
		                    	</div>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="projetos">
		                    		<img src="../app/src/imagens/catcher.jpg" alt="" />
		                    		<p>Mundo Estranho - Wordpress</p>
		                    	</div>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="projetos">
		                    		<img src="../app/src/imagens/catcher.jpg" alt="" />
		                    		<p>Vip - Wordpress</p>
		                    	</div>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="projetos">
		                    		<img src="../app/src/imagens/catcher.jpg" alt="" />
		                    		<p>Viagem e Turismo - Wordpress</p>
		                    	</div>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="projetos">
		                    		<img src="../app/src/imagens/catcher.jpg" alt="" />
		                    		<p>Quatro Rodas - Ruby on Rails</p>
		                    	</div>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="projetos">
		                    		<img src="../app/src/imagens/catcher.jpg" alt="" />
		                    		<p>Blogs Superinteressante - Wordpress</p>
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