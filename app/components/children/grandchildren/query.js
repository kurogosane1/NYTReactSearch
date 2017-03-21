const React = require("react");

var Query = React.createClass({
	//create an obj to save it in the collection and removing that specific choice so there isnt mulitple save of the same article
	saveBtn: function(){
		var obj = {
			title: this.props.title,
			url: this.props.url,
			date: this.props.date
		};

		$.post("/api/saved", obj);
		$("#" + this.props.index).empty();
	},

	render: function() {
		return(
			<div id={this.props.index}>
				<div className="row">
					<div className="col-sm-10">
						<h3>
							<span className="label label-primary">
								{this.props.index + 1}
							</span>
							<strong>
								{this.props.title}
							</strong>
						</h3>
						<h5>
							{this.props.date}
						</h5>
						<a href={this.props.url}>
							Link
						</a>
					</div>
					<div className="col-sm-2">
						<button className="saveBtn btn btn-primary btn-lg"
										data-title={this.props.title}
										data-date={this.props.date}
										data-url={this.props.url}
										data-id={this.props.index}
										onClick={this.saveBtn}>
							Save
						</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Query;