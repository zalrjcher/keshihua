import { request } from '@utils';

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
  return request(`/getsameunit`, {
    method: 'POST',
    body: JSON.stringify({
      ...payload
    }),
  });
}
