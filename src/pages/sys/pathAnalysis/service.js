import {request} from '@utils';
import {_request} from "@/pages/sys/util/esRequest";

export function fetch(payload) {
    return request(`/getPath`, {
        method: 'POST',
        body: JSON.stringify({
            ...payload
        }),
    });
}
export function getInfoTypeDict(payload) {
    return request(`/getPathDict`, {
        method: 'POST',
        body: JSON.stringify({
            ...payload
        }),
    });
}
export function getResult(payload) {
    return _request(`/nsfc_v2/_search`, {
        method: 'POST',
        body:payload.query
    });
}
