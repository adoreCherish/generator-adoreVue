const request = require('request-promise');
class indexModel{
    constructor(){

    }
    showLists(){
        var options = {
            method: 'GET',
            uri: 'http://localhost/showLists.php',
        };
        return new Promise((resolve, reject) => {
            console.log('here');
            request(options)
                .then(function(result) {
                    console.log('result:'+result);
                    //var result = [{"url":"..\/public\/img\/tm-img-02-tn.jpg","0":"..\/public\/img\/tm-img-02-tn.jpg","description":"first","1":"first","id":"1","2":"1"},{"url":"..\/public\/img\/tm-img-01-tn.jpg","0":"..\/public\/img\/tm-img-01-tn.jpg","description":"second","1":"second","id":"2","2":"2"},{"url":"..\/public\/img\/tm-img-01-tn.jpg","0":"..\/public\/img\/tm-img-03-tn.jpg","description":"second","1":"second","id":"3","2":"3"},{"url":"..\/public\/img\/tm-img-04-tn.jpg","0":"..\/public\/img\/tm-img-04-tn.jpg","description":"4","1":"4","id":"4","2":"4"}]//data.data//[{"url":"..\/public\/img\/tm-img-01-tn.jpg","description":"first","1":"first","id":"1","2":"1"}];

                    //const info = JSON.parse(result);
                    //if (info) {
                        resolve({
                            data: [{"url":"..\/public\/img\/tm-img-01-tn.jpg","0":"..\/public\/img\/tm-img-02-tn.jpg","description":"first","1":"first","id":"1","2":"1"},{"url":"..\/public\/img\/tm-img-02-tn.jpg","0":"..\/public\/img\/tm-img-01-tn.jpg","description":"second","1":"second","id":"2","2":"2"},{"url":"..\/public\/img\/tm-img-03-tn.jpg","0":"..\/public\/img\/tm-img-03-tn.jpg","description":"second","1":"second","id":"3","2":"3"},{"url":"..\/public\/img\/tm-img-04-tn.jpg","0":"..\/public\/img\/tm-img-04-tn.jpg","description":"4","1":"4","id":"4","2":"4"}]//data.data//[{"url":"..\/public\/img\/tm-img-01-tn.jpg","description":"first","1":"first","id":"1","2":"1"}]
                        })
                    // } else {
                    //     reject({
                    //         data: 0
                    //     })
                    // }
                })
                .catch(function(err) {

                });
        })
    }
    gitbranch(){
        var options = {
            method: 'GET',
            uri: 'http://localhost/gitbranch.php',
        };
        return new Promise((resolve, reject) => {
            console.log('here');
            request(options)
                .then(function(result) {
                    console.log('result gitbranch:'+result);
                        resolve({
                            data: 1
                        })
                })
                .catch(function(err) {

                });
        })
    }

}
export default indexModel;