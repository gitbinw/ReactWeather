import 'whatwg-fetch';

class Utility {
    constructor() {}
    
    /*Wrap Fetch in a new Promise function*/
    getData(url) {
        const objPromise = new Promise((resolve, reject) => {
            fetch(url)
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                    resolve(json);
                }).catch(function(ex) {
                    reject(ex);
                });
        });
        
        return objPromise;
    }

}

export default new Utility();