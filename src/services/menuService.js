import server from '../util/server';

export const menuService = {
    getMenu
};

function getMenu() {
    return server.get("api/exchange/odds")
        .then(handleResponse)
        .then(response => {
            console.log(response);
            return response;
        }).catch(error => {
            console.log(error);
            // localStorage.setItem('error', JSON.stringify(error.response.data));
            return error;
        });
}
function handleResponse(response) {
    const data = response.data;
    if (!response.statusText === "OK") {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            // logout();
            // location.reload(true);
        }
        return data;
    }
    return data;
}
