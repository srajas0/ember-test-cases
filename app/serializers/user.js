import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    serialize() {
        let json = this._super(...arguments);
        
        json.data.attributes.userInfo = {
            firstName: json.data.attributes['first-name'],
            lastName: json.data.attributes['last-name'],
            age: json.data.attributes.age
        };
    
        delete json.data.attributes['first-name'];
        delete json.data.attributes['last-name'];
        delete json.data.attributes.age;
        
        // Now the data will be sent to the server in the following format
        // userInfo { firstName: "xxxxx", "lastName": "x", "age": "27"}
        return json;
    },
    shouldSerializeHasMany() {
        return true;
    }
});
