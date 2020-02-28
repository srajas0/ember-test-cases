import Component from '@ember/component';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';

export default Component.extend({
    classNames: ['calc-comp'],
    mathOperations: service(),
    inputNumbers: '',
    result: '',
    currentOperation: '',
    _reset() {
        this.set('inputNumbers', '');
        this.set('aValue', '');
        this.set('bValue', '');
        this.set('result', '');
    },
    actions: {
        numberPressing(key, operation) {
            this.set("inputNumbers", `${this.inputNumbers}${key}`);
            if (!isEmpty(operation)) {
                this.set('currentOperation', operation);
            }
        },
        calculate() {
            let [aVal, bVal] = this.inputNumbers.split(/[+*/-]/g); // Split the whole input to array            
            // calling the mathOperations service functions
            const result = this.mathOperations[this.currentOperation](parseInt(aVal, 10), parseInt(bVal, 10));
            this.set("result", result);
        },
        clear() {
            this._reset();
        }
    }
});
