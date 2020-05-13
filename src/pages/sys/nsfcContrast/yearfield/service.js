import { request } from '@utils';
import {_request} from "@/pages/sys/util/esRequest";
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
  return request(`/getYearResult`, {
    method: 'POST',
    body: JSON.stringify({
      ...payload
    }),
  });
}
export function getsameunit(payload) {
  return _request(`/nsfc_v2/_search`, {
    method: 'POST',
    body:payload._query.query,
    size:payload._query.size,
    aggs:payload._query.aggs
  });
}
