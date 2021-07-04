import server from '../util/server';

export const eventService = {
    inPlayAndPopular,
    leftEventsMenu,
    inPlayEvents,
    displayParticularEvent,
    eventOdds,
    eventScore,
    eventsByType
};

function inPlayAndPopular() {
    return server.get("api/exchange/odds/inPlayAndPopularEvents")
        .then(handleResponse)
        .then(response => {
            return response;
        }).catch(error => {
            console.log(error);
            // localStorage.setItem('error', JSON.stringify(error.response.data));
            return error;
        });
}

function leftEventsMenu() {
    return server.get("api/exchange/odds/sma-menu/menu")
        .then(handleResponse)
        .then(response => {
            return response;
        }).catch(error => {
            // localStorage.setItem('error', JSON.stringify(error.response.data));
            return error;
        });
}

function inPlayEvents(eventTypeId) {
    return server.get("api/exchange/odds/inplayEvents/" + eventTypeId)
        .then(handleResponse)
        .then(response => {
            console.log(response);
            return response;
        }).catch(error => {
            localStorage.setItem('error', JSON.stringify(error.response.data));
            return error;
        });
}
function eventsByType(eventTypeId){
    return server.get("api/exchange/odds/eventType/" + eventTypeId)
        .then(handleResponse)
        .then(response => {
            // console.log(response);
            return response;
        }).catch(error => {
            // localStorage.setItem('error', JSON.stringify(error.response.data));
            return error;
        });
}
function displayParticularEvent(eventId, completionId ) {
    return server.get("api/exchange/odds/group/" + eventId + "/" +  completionId + "?includeOutrights=true&includeToQualify=true")
        .then(handleResponse)
        .then(response => {
            return response;
        }).catch(error => {
            localStorage.setItem('error', JSON.stringify(error.response.data));
            return error;
        });
}

function eventOdds() {
    return server.post("admin/api/search/device/")
        .then(handleResponse)
        .then(response => {
            return response;
        }).catch(error => {
            localStorage.setItem('error', JSON.stringify(error.response.data));
            return error;
        });
}

function eventScore(eventTypeId, eventId) {
    return server.get("api/match-center/stats/" + eventTypeId + "/" + eventId)
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
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            // logout();
            // location.reload(true);
        }
        return data;
    }
    return data;
}
