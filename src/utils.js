
export const awaitObjectWithPromise = async (obj) => {
    for (let prop in obj) {

        // If the propriety has a 'then' function it's a Promise
        const first = typeof obj[prop] !== 'undefined' && typeof obj[prop].then === 'function';
        if (first) {

            obj[prop] = await obj[prop];
        }
        const second = typeof obj[prop] !== 'undefined' && typeof obj[prop] === 'object';
        if (second) {

            obj[prop] = await awaitObjectWithPromise(obj[prop]);
        }
    }
    return obj;
}

