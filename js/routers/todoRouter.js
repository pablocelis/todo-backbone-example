var app = app || {};

var workspace = Backbone.Router.extend({
	
	routes: {
		'*filter': 'setFilter'
	},

	setFilter: function(param) {
		if(param) {
			param = param.trim();
		}
		app.TodoFilter = param || '';

		app.Todos.trigger("filter");
	}
});

app.TodoRouter = new workspace();
Backbone.history.start();