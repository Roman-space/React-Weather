function getDataFromApi(data) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject(data);

            resolve(data );
        }, 3000);
    });
};

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        resolve(a + b);
        reject(a + b);
    });
}
addPromise(10, 6).then(function(sum) {
    console.log(sum);
}, function(sum) {
    console.log(sum);
});

getDataFromApi('A').then(function (data) {
    console.log('success',  data);
}, function (data) {
    console.log('error' + data);
});
