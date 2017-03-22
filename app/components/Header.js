var React = require('react');
var Header = React.createClass({
	render: function(){
		return(
			<header>
				<div className="container">
					<div className="logo">
						<a href="index.html">
							<img src="../app/src/imagens/law.png" alt="Logo Topo" />
						</a>
					</div>
					<div className="links">
						<nav>
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#sobre">Sobre</a></li>
								<li><a href="#portfolio">Portfólio</a></li>
								<li><a href="#depoimentos">Depoimentos</a></li>
								<li><a href="#contato">Contato</a></li>
							</ul>
						</nav>
						<ul className="social">
							<li><a href="#"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i className="fa fa-github"></i></a></li>
						</ul>
					</div>
					<h1>
						<strong>Vinícius </strong>A. de <strong><span>Souza</span></strong>
					</h1>
					<p>Desenvolvedor Front-End</p>
				</div>
			</header>
		)
	}
});

module.exports = Header;