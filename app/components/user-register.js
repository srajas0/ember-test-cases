import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
    store: service(),
    router: service(),
    actions: {
        submit(model) {
            this.store.createRecord('user', {
                id: model.firstName,
                firstName: model.firstName,
                lastName: model.lastName,
                age: model.age,
            }).save().then(() => {
                this.get('router').transitionTo('users-list');
            });          
        }
    }
});
