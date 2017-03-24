var React = require('react');
var Header = React.createClass({
	render: function(){
		return(
			<div className="header">
				<nav className="menu-responsivo">
					<ul>
						<li><a href="index.html" className="inicio">Início</a></li>
						<li><a href="#sobre" className="sobre">Sobre</a></li>
						<li><a href="#habilidades" className="habilidades">Habilidades</a></li>
						<li><a href="#portfolio" className="portfolio">Portfolio</a></li>
						<li><a href="#contato" className="contato">Contato</a></li>
					</ul>
				</nav>
				<div className="layout">
					<header>
						<div className="container">
							<div className="row">
								<div className="menu">
									<div className="logo wow slideInLeft" data-wow-duration="0.5s" data-wow-delay="0.3s">
										<a href="index.html">
											<img src="../app/src/imagens/logo.png" alt="Logo Topo" />
										</a>
									</div>
									<div className="links">
										<nav>
											<ul>
												<li><a href="#">Home</a></li>
												<li><a href="#sobre">Sobre</a></li>
												<li><a href="#habilidades">Habilidades</a></li>
												<li><a href="#portfolio">Portfólio</a></li>
												<li><a href="#contato">Contato</a></li>
											</ul>
										</nav>

										<a href="javascript:;" className="toggle">
											<span></span>
											<span></span>
											<span></span>
										</a>

										<ul className="social">
											<li><a href="https://www.facebook.com/vinicius.arruda.90" target="_blank"><i className="fa fa-facebook"></i></a></li>
											<li><a href="https://www.linkedin.com/in/vin%C3%ADcius-arruda-a736b9100" target="_blank"><i className="fa fa-linkedin"></i></a></li>
											<li><a href="github.com/viniarruda" target="_blank"><i className="fa fa-github"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
							<h1>
								<strong>Vinícius </strong>A. de <strong><span>Souza</span></strong>
							</h1>
							<p>Desenvolvedor Front-End</p>
						</div>
					</header>
				</div>
			</div>
		)
	}
});

module.exports = Header;