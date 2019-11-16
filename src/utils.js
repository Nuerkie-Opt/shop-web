import axios from "axios";
import Fingerprint2 from "fingerprintjs2";

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

export const getAuthInfo = () => {

    return {
        user: JSON.parse(localStorage.getItem('user')),
        seller: JSON.parse(localStorage.getItem('seller'))
    }
}

export const isLoggedIn = async () => {
    const is_logged_in = localStorage.getItem('isLoggedIn');

    if (!is_logged_in) {
        return false;
    }
    const user = getAuthInfo().user;
    const payload = {
        "111": {
            auth: {},
            "000": ["auth"]
        },
        "000": ["111"]
    };
    let status;
    await axios.post("/action", payload, {
        headers: {
            Authorization: user.token,
            'Account-ID': user.id
        }
        })
        .then( (response) =>{
            console.log(response);
            if(response.data['111'].auth.status){
                status = user;
            }else{
                status = false;
            }
        })
        .catch( (error) =>{
            console.log(error);
            status = false;
        });

        return status;
}

export const browserFingerPrint = async () => {
    let data;
    let hash;
    await Fingerprint2.getPromise().then(components => {
        data = components;
        hash = Fingerprint2.x64hash128(components.map(component => component.value).join(""), 31);
    });

    return {
        deviceData:data,
        deviceHash:hash
    }
}