var React = require('react');

var Depoimentos = React.createClass({
	render: function() {
		return(
			<section id="depoimentos">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
		                    <div className="titulo-contato">
		                        <h2>Depoimentos</h2>
		                          <div className="divider">
								  	<i className="fa fa-envelope-open"></i>
								 </div>
		                        <p>Saiba o que falam sobre mim</p>
		                    </div>
		                </div>
					</div>
				</div>
			</section>
		)
	}
});

module.exports = Depoimentos;