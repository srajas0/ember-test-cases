import Service from '@ember/service';

export default Service.extend({
    addition(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return;
        }
        return a + b;
    },
    subtraction(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return;
        }
        return a - b;
    },
    multiplication(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return;
        }
        return a * b;
    },
    division(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return;
        }
        return a / b;
    }
});
