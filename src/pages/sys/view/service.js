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
  console.log('asdkfjgasdgfasuiodgfasuoidfasd')
  console.log(payload)
  return request(`/getYearResult`, {
    method: 'POST',
    body: JSON.stringify({
      ...payload
    }),
  });
}
