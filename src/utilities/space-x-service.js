var URL = 'https://api.spacexdata.com'
var VERSION = "/v3";

function getCompanyInfo(){
    return fetch(`${URL}${VERSION}/info`)
    .then((response => response.json()),
    error => console.log(error));   
}

function getRocketLaunch(){
    return fetch(`${URL}${VERSION}/launches`)
        .then((response => response.json()),
            error => console.log(error));
}



export{
    getCompanyInfo,
    getRocketLaunch
}