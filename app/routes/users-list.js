import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('user');
    },
    actions: {
        goToNext() {
            this.transitionTo('/create-user');
        },
        delete(user) {            
            user.destroyRecord(); 
        }
    }
});
