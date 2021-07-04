import server from '../util/server';

export const betService = {
    openUserBets,
    profitAndLoss,
    newBet
};

function openUserBets(userId) {
    return server.get("api/account/" + userId + "/order-list?orderStatus=open")
        .then(handleResponse)
        .then(response => {
            return response;
        }).catch(error => {
            localStorage.setItem('error', JSON.stringify(error.response.data));
            return error;
        });
}

function profitAndLoss(userId, from, to) {
    return server.post("api/account/" + userId + "/reports/pnl?from=" + from + "&to="  + to)
        .then(handleResponse)
        .then(response => {
            return response;
        }).catch(error => {
            localStorage.setItem('error', JSON.stringify(error.response.data));
            return error;
        });
}

function newBet() {
    return server.get("api/member/exchange/order")
        .then(handleResponse)
        .then(response => {
            return response;
        }).catch(error => {
            localStorage.setItem('error', JSON.stringify(error.response.data));
            return error;
        });
}

function handleResponse(response) {
    const data = response.data;
    if (!response.statusText === "OK") {
        if (response.status === 400) {
        }
        return data;
    }
    return data;
}
