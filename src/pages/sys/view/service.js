import { request } from '@utils';
import {_request} from '.././util/esRequest'
export function fetch(payload) {
    const { time, key } = payload;
    return request(`/view/${key}`, {
        method: 'POST',
        body: JSON.stringify({
            time
        }),
    });
}
export function getYearResult(payload) {
  console.log("调用eseses");
  _request();
  return request(`/getYearResult`, {
    method: 'POST',
    body: JSON.stringify({
      ...payload
    }),
  });
}
