var React = require('react');

var Sobre = React.createClass({
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
		                </div>
					</div>
				</div>
			</section>
		)
	}
});

module.exports = Sobre;