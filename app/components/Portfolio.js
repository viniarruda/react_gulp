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
		                    		<li className="filter" id="mobile">Mobile</li>
		                    	</ul>
		                    </div>
		                    <div className="col-md-10">
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix web">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/portfolio/vt.png" title="Viagem e Turismo - Wordpress" className="portfolio-popup"><img src="../app/src/imagens/portfolio/vt.png" alt="Viagem e Turismo"/></a>
			                    	</div>
			                    </div>
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix web">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/portfolio/me.png" title="Mundo Estranho - Wordpress" className="portfolio-popup"><img src="../app/src/imagens/portfolio/me.png" alt="Mundo Estranho"/></a>
			                    	</div>
			                    </div>
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix web">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/portfolio/vip.png" title="Vip - Wordpress" className="portfolio-popup"><img src="../app/src/imagens/portfolio/vip.png" alt="Vip"/></a>
			                    	</div>
			                    </div>
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix web">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/portfolio/ge.png" title="Guia do Estudante- Wordpress" className="portfolio-popup"><img src="../app/src/imagens/portfolio/ge.png" alt="Guia do Estudante"/></a>
			                    	</div>
			                    </div>
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix mobile">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/portfolio/cel_super.jpg" title="Superinteressante Blog- Mobile" className="portfolio-popup"><img src="../app/src/imagens/portfolio/cel_super.jpg" alt="Superinteressante Mobile"/></a>
			                    	</div>
			                    </div>
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix web">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/portfolio/mac_super.jpg" title="Superinteressante Blog- Desktop" className="portfolio-popup"><img src="../app/src/imagens/portfolio/mac_super.jpg" alt="Superinteressante Desktop"/></a>
			                    	</div>
			                    </div>
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix web">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/portfolio/4r_desktop.jpg" title="Quatro Rodas - Desktop" className="portfolio-popup"><img src="../app/src/imagens/portfolio/4r_desktop.jpg" alt="Quatro Rodas - Desktop"/></a>
			                    	</div>
			                    </div>
			                    <div className="col-md-4 col-sm-6 col-xs-12 mix mobile">
			                    	<div className="projetos">
			                    		<a href="../app/src/imagens/portfolio/4r_mobile.jpg" title="Quatro Rodas - Mobile" className="portfolio-popup"><img src="../app/src/imagens/portfolio/4r_mobile.jpg" alt="Quatro Rodas - Mobile"/></a>
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