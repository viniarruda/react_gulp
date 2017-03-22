var React = require('react');
var Header = require('./Header');
var Sobre = require('./Sobre');
var Portfolio = require('./Portfolio');
var Depoimentos = require('./Depoimentos');
var Contato = require('./Contato');
var Footer = require('./Footer');

var Container = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<Sobre />
				<Portfolio />
				<Depoimentos />
				<Contato />
				<Footer />
			</div>
		);
	}
});

module.exports = Container;