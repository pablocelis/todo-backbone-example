var app = app || {};

var Todos = Backbone.Collection.extend({

	model: app.Todo,

	localStorage: new Backbone.LocalStorage('todos-backbone'),

	completed: function() {
		return this.filter(function(task) {
			return task.get('completed');
		});
	},

	remaining: function() {
		return this.without.apply(this, this.completed());
	},

	nextOrder: function() {
		if (!this.length) {
			return 1;
		}
		return this.last().get('order') + 1;
	},

	comparator: function(task) {
		return task.get('order');
	}
});

app.Todos = new Todos();