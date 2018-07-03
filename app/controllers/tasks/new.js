import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addTask: function(){
			const title = this.get('title');
			const description = this.get('description');
			const dueDate = this.get('date');

			// Create New Task
			const newTask = this.store.createRecord('task', {
				title,
				description,
				dueDate: new Date(dueDate)

			});

			// Save to DataBase
			newTask.save();

			// Clear form 
			this.setProperties({
				title: '',
				description: '',
				date: ''
			})
		}
	}
});
