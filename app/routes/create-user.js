import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // return this.store.createRecord('user');
        return {
            firstName: '',
            lastName: '',
            age: ''
        }
    },
    actions: {
        goBack() {
            this.transitionTo('users-list');
        },
        submit(model) {
            this.store.createRecord('user', {
                id: model.firstName,
                firstName: model.firstName,
                lastName: model.lastName,
                age: model.age,
            }).save().then(() => {
                this.transitionTo('users-list');
            });          
        }
    }
});
