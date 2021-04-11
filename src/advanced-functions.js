//=============================================
// ------------------------------------ TASK №1
//=============================================
const cache = (func) => {
    let map = new Map();

    return function (...args) {
        let key = hash(args);
        if (map.has(key))
            return map.get(key);

        let result = func.apply(this, args);
        map.set(key, result);

        return result;
    }
}

function hash(args) {
    return args.join(',');
}

//=============================================
// ------------------------------------ TASK №2
//=============================================
const forwardBackwardSteps = {
    step: 0,

    forward() {
        this.step++;
        return this;
    },

    backward() {
        this.step--;
        return this;
    },

    revealStep() {
        console.log(this.step);
        return this;
    }
};

//=============================================
// ------------------------------------ TASK №3
//=============================================
const applyAll = (func, ...args) => {
    return func.apply(this, args);
}
const sum = (...args) => {
    return args.reduce((result, current) => result + current, 0);
}

const mul = (...args) => {
    return args.reduce((result, current) => result * current); 
}

//=============================================

module.exports = { cache, forwardBackwardSteps, applyAll, sum, mul }
