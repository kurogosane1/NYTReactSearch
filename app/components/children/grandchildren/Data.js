const React = require("react");

var Data = React.createClass({
	//delete button to remove document from the collection
	deleteBtn: function(){
		$.ajax({url: "/api/saved/" + this.props.id, type: 'DELETE', success: (result)	=> {
			if(result){
				$.get("/api/saved").done( (data) => {
					this.props.setParent(data);
				});
			}
	  }});
	},

	render: function() {
		return(
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
									data-id={this.props.id}
									onClick={this.deleteBtn}>
						Delete
					</button>
				</div>
			</div>

		);
	}
});

module.exports = Data;