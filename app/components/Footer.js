var React = require('react');

var Footer = React.createClass({
	render: function() {
		return(
			<footer>
				<div className="container">
					<div className="logo-footer">
						<img src="../app/src/imagens/logo_bottom.png" alt="Logo Topo" />
					</div>
					<div className="links-footer">
						<ul>
							<li><a href="https://www.facebook.com/vinicius.arruda.90"  target="_blank" className="facebook"><i className="fa fa-facebook"></i></a></li>
							<li><a href="https://www.linkedin.com/in/vin%C3%ADcius-arruda-a736b9100"  target="_blank" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
							<li><a href="https://plus.google.com/u/0/109758076069727824197"  target="_blank" className="google-plus"><i className="fa fa-google"></i></a></li>
							<li><a href="#" className="github"><i className="fa fa-github"></i></a></li>
						</ul>
					</div>
					<div className="copyright">
						© 2017 - Portfólio de Web Developer - Vinícius Arruda. Todos os direitos reservados. All rights reserved.
					</div>
				</div>
			</footer>
		)
	}
});

module.exports = Footer;