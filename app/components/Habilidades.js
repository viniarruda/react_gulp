var React = require('react');

var Habilidades = React.createClass({
	render: function(){
		return(
			<section id="habilidades">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="titulo-contato">
		                        <h2>Habilidades</h2>
		                          <div className="divider">
								  	<i className="fa fa-code"></i>
								 </div>
		                        <p>Essas são as minhas habilidades</p>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="skill">
		                    		<i className="fa fa-html5"></i>
		                    		<p>Html</p>
		                    	</div>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="skill">
		                    		<i className="fa fa-css3"></i>
		                    		<p>Css / Sass</p>
		                    	</div>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="skill">
		                    		<i className="fa fa-code"></i>
		                    		<p>Javascript</p>
		                    	</div>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="skill">
		                    		<i className="fa fa-asterisk"></i>
		                    		<p>ReactJs</p>
		                    	</div>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="skill">
		                    		<i className="fa fa-bolt"></i>
		                    		<p>Gulp / Grunt</p>
		                    	</div>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="skill">
		                    		<i className="fa fa-wordpress"></i>
		                    		<p>Wordpress</p>
		                    	</div>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="skill">
		                    		<i className="fa fa-mobile"></i>
		                    		<p>Responsivo</p>
		                    	</div>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="skill">
		                    		<i className="fa fa-check"></i>
		                    		<p>jQuery</p>
		                    	</div>
		                    </div>
		                    <div className="col-md-4 col-sm-6">
		                    	<div className="skill">
		                    		<i className="fa fa-file"></i>
		                    		<p>AngularJS</p>
		                    	</div>
		                    </div>
						</div>
					</div>
				</div>
			</section>
		)
	}
});

module.exports = Habilidades;