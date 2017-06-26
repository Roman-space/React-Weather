var axios = require('axios');

const system = '&units=metric';
const ID =  '7a84c890cdf4624d06923de3feff0fc6';
const URL = 'http://api.openweathermap.org/data/2.5/weather?appid='+ID+system;

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${URL}&q=${encodedLocation}`;
        
        return axios.get(requestURL).then((res) => {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, (res) => {
            throw new Error(res.data.message);
        });
    }
}
