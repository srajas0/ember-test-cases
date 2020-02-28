import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    namespace: "api/user",
    init() {
        this._super(...arguments);
    
        this.set('headers', {
          'API_KEY': 'secret key',
          'ANOTHER_HEADER': 'Some header value'
        });
    },
    urlForFindAll() {
        return this._super(...arguments) + '/findAll';
    },
    urlForDeleteRecord() {
        return this._super(...arguments) + '/destroy';
    }
});
