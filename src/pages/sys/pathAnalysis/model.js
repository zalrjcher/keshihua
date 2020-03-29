import * as api from './service';

export default {
    namespace: 'pathAnalysis',
    state: {
        pageData: undefined,
        eventData: undefined,
        pageNode: undefined,
        eventNode: undefined,
        clickType: '1',
        dict: {
            eventCountDict: [
                {
                    name: '>=0',
                    value: '0'
                },
                {
                    name: '>=100',
                    value: '100'
                },
                {
                    name: '>=500',
                    value: '500'
                },
                {
                    name: '>=1000',
                    value: '1000'
                },
                {
                    name: '>=5000',
                    value: '5000'
                },
            ],
            pageCountDict: [
                {
                    name: '>=0',
                    value: '0'
                },
                {
                    name: '>=100',
                    value: '100'
                },
                {
                    name: '>=500',
                    value: '500'
                },
                {
                    name: '>=1000',
                    value: '1000'
                },
                {
                    name: '>=5000',
                    value: '5000'
                },
            ],
            infoTypeDict: [
                {
                    name: "点击/浏览次数",
                    value: 'pv'
                },
                {
                    name: "独立用户个数",
                    value: 'uv'
                },
                {
                    name: "会话数",
                    value: 'visit'
                },
            ],
        },
        events: [],
        pages: [],
        values: {},
        data:{}
    },

    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen(({ pathname, query, state }) => { // eslint-disable-line
                if (pathname.indexOf('sys/pathAnalysis') > -1) {
                    dispatch({ type: 'getDict', payload: { timeType: 'day' } });
                }
            });
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {
            const { data } = yield call(api.fetch, {
                ...payload,
                clickType: "1"
            });
            yield put({
                payload: {
                    data:data.pathData,
                    values: payload,
                },
              type: 'save',
            });

        },
        *getDict({ payload }, { call, put }) {
            const { data } = yield call(api.getInfoTypeDict, { ...payload });
            const { eventDict: events, pageDict: pages } = data;
            yield put({
                type: 'save',
                payload: {
                    events,
                    pages
                },
            });
        },
        *_fetch({ payload }, { call, put, select }) {
            const { values } = yield select(state => state.pathAnalysis);
            const { events, pages, ...rest } = values;//eslint-disable-line
            const param = {
                ...rest,
                ...payload,
            };
            const { data } = yield call(api.fetch, param);
            const { pathData: pageData, eventData } = data;
            yield put({
                type: 'save',
                payload: {
                    pageData,
                    eventData,
                },
            });
        }
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
