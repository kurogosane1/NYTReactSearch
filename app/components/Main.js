
var React = require("react");

var Main = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1>
						<i className="fa fa-newspaper-o"></i>
						New York Times Search
					</h1>
					<a className="btn btn-primary" href="#/Search">
						Search
					</a>
					<a className="btn btn-primary" href="#/Saved">
						Saved
					</a>
				</div>
				<div>

					{this.props.children}

				</div>
			</div>
		);
	}
});

module.exports = Main;