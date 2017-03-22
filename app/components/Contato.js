var React = require('react');
var Contato = React.createClass({
	render: function() {
		return (
			<section id="contato">
				<div className="container">
					<div className="row">
						<div className="col-md-offset-3 col-sm-offset-2 col-md-6 col-sm-8">
							<div className="row">
								<div className="contato-detalhado">
									<a href="mailto:viniarruda.souza@gmail.com">viniarruda.souza@gmail.com</a>
								</div>
								<form action="mail.php" method="POST" className="contate-me">
									<div className="col-sm-6">
										<div className="form-group">
											<input type="text" id="nome" required className="form-control" placeholder="Seu nome" />
										</div>
									</div><div className="col-sm-6">
										<div className="form-group">
											<input type="text" id="nome" required className="form-control" placeholder="Seu e-mail" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-group">
											<input type="text" id="nome" required className="form-control" placeholder="Seu assunto" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-group">
											<input type="text" id="nome" required className="form-control" placeholder="De onde você é?" />
										</div>
									</div>
									<div className="col-sm-12">
										<div className="form-group">
											<textarea id="mensagem" required name="mensagem" className="textarea-msg form-control" placeholder="Sua mensagem" rows="5" />
										</div>
									</div>
									<div className="text-center">
										<button type="submit" className="button button-style">
											Enviar
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
});

module.exports = Contato;