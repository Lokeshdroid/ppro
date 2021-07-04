import { history } from '../helpers/history';
import server from '../util/server';

export const userService = {
    login,
    logout,
    balance,
    transferStmt,
    changePwd
};

function login(username, password, from) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-request-url': 'http://sher777.com/api/member/auth/login' , 'Accept': '*/*', 'Accept-Encoding':'gzip, deflate, br'},
        body: JSON.stringify({ username, password })
    };
    /*history.push(from);
    var resp = "{\"success\":true,\"result\":{\"memberId\":\"2\",\"memberCode\":\"AS00000002\",\"settings\":{\"oneClickSettings\":{\"active\":false,\"selected\":false,\"settings\":[0,0,0]},\"presetStakeSettings\":{\"settings\":[100,500,1000,5000,10000,25000],\"mobileStakesExchangeGameSettings\":[10,20,30],\"mobileStakesSettings\":[100,200,2000]}},\"loginName\":\"demo\"},\"status\":{\"statusCode\":\"0\",\"statusDesc\":\"Success\"}}";
    var response = JSON.parse(resp);
    if(response && response.success){
        var result = response.result;
        localStorage.setItem('user', JSON.stringify(result));
        history.push(from);
        return result;
    }*/
    return server.post("api/member/auth/login", JSON.stringify({ username, password }))
        .then(handleResponse)
        .then(user => {
            if(user.success){
                localStorage.setItem('user', JSON.stringify(user));
            }
            history.push("/sport");
            return user;
    }).catch(error => {
        console.log(error.response)
        localStorage.setItem('error', JSON.stringify(error.response.data));
        return error;
    });
    /*return fetch(`http://localhost:8080/sher777.com/api/member/auth/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            alert(user.success);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            if(user.success){
                localStorage.setItem('user', JSON.stringify(user));
            }
            history.push(from);
            return user;
        }).catch((response,status) => {
            console.log(status);
        });*/
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function balance(username) {
    return server.get("api/account/" + username + "/balance")
        .then(handleResponse)
        .then(balance => {
            return balance;
        }).catch(error => {
            localStorage.setItem('error', JSON.stringify(error.response.data));
            return error;
        });
}

function transferStmt(userId, from, to) {
    return server.post("/api/account/" + userId + "/reports/transfer?from=" + from + "&to="  + to)
        .then(handleResponse)
        .then(balance => {
            return balance;
        }).catch(error => {
            localStorage.setItem('error', JSON.stringify(error.response.data));
            return error;
        });
}

function changePwd(userId) {
    return server.post("api/account/" + userId + "/settings/password")
        .then(handleResponse)
        .then(balance => {
            return balance;
        }).catch(error => {
            localStorage.setItem('error', JSON.stringify(error.response.data));
            return error;
        });
}

function handleResponse(response) {
    const data = response.data;
    console.log(response.headers.authorization);
    if (!response.statusText === "OK") {

        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            // location.reload(true);
        }
        return data;
    }else{
        localStorage.setItem("token",response.headers.authorization)
    }
    return data;
}
