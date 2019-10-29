
export const awaitObjectWithPromise = async (obj) => {
    for (let prop in obj) {
        
        // If the propriety has a 'then' function it's a Promise
        if (typeof obj[prop].then === 'function') {
            
            obj[prop] = await obj[prop];
        }
        if (typeof obj[prop] === 'object') {
            
            obj[prop] = await awaitObjectWithPromise(obj[prop]);
        }
    }
    return obj;
}

