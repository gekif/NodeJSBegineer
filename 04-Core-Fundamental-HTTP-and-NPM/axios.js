const axios = require('axios');

let username = 'edwin';

axios.get('https://api.github.com/users/' + username).then((res) => {
    /**
     * Return all data
     */
    // console.log(res.data);

    /**
     * Return one of the data
     */
    console.log(res.data.followers);

}).catch((err) => {
    console.log(err);
});
