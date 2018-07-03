import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		editTask: function(id){
			 const self = this;

			const title = this.get('model.title');
			const description = this.get('model.description');
			const dueDate = this.get('model.date');

			// Update Task
			this.store.findRecord('task', id).then(function(task){
				task.set('title', title);
				task.set('description', description);
				task.set('date', new Date(date));
			})
	

			// Save to DataBase
			task.save();

			// redirect to tasks route
			self.transitionTo('tasks');
		}
	}
});
