import http from './axios-common';

export function getAllBonds(){
        return http.get("/bond");
}

export function dateRange(date) {
        return http.get(`bond/five-days/${date}`);
}
