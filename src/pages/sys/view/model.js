import moment from 'moment';
import pathToRegexp from 'path-to-regexp';
// import * as api from './service';
const data =  {
    "columns": [
        {
            "field": "xAxis",
            "name": "时间",
            "type": "string"
        },
        {
            "field": "email",
            "name": "邮件营销",
            "type": "string"
        },
        {
            "field": "union",
            "name": "联盟广告",
            "type": "string"
        },
        {
            "field": "video",
            "name": "视频广告",
            "type": "string"
        },
        {
            "field": "visit",
            "name": "直接访问",
            "type": "string"
        },
        {
            "field": "search",
            "name": "搜索引擎",
            "type": "string"
        }
    ],
    "rows": [
        {
            "xAxis": "2018-12-12",
            "email": 120,
            "union": 220,
            "video": 150,
            "visit": 30,
            "search": 820
        },
        {
            "xAxis": "2018-12-13",
            "email": 132,
            "union": 182,
            "video": 232,
            "visit": 332,
            "search": 932
        },
        {
            "xAxis": "2018-12-14",
            "email": 101,
            "union": 192,
            "video": 202,
            "visit": 302,
            "search": 902
        },
        {
            "xAxis": "2018-12-15",
            "email": 134,
            "union": 234,
            "video": 154,
            "visit": 334,
            "search": 934
        },
        {
            "xAxis": "2018-12-16",
            "email": 90,
            "union": 290,
            "video": 190,
            "visit": 390,
            "search": 1290
        },
        {
            "xAxis": "2018-12-17",
            "email": 230,
            "union": 330,
            "video": 330,
            "visit": 330,
            "search": 1230
        },
        {
            "xAxis": "2018-12-18",
            "email": 210,
            "union": 310,
            "video": 420,
            "visit": 320,
            "search": 1320
        }
    ]
};
const dd = {
    columns: [
        {
            field: 'date',
            name: '日期',
        },
        {
            field: 'range1',
            name: '0~30',
        },
        {
            field: 'range2',
            name: '30~60',
        },
        {
            field: 'range3',
            name: '60~90',
        },
        {
            field: 'range4',
            name: '90~120',
        },
        {
            field: 'range5',
            name: '>=120',
        },
    ],
    rows: [
        {
            date: '20181212',
            range1: "123",
            range2: "223",
            range3: "323",
            range4: "423",
            range5: "523",

        },
        {
            date: '20181213',
            range1: "101",
            range2: "201",
            range3: "301",
            range4: "401",
            range5: "501",

        },
        {
            date: '20181214',
            range1: "181",
            range2: "281",
            range3: "381",
            range4: "481",
            range5: "581",

        }
    ]
};
export default {
    namespace: 'viewModel', //命名空间名字，必填
    state: {
        p1: {},
        p2: {},

    },
    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen(({ pathname, query, state }) => { // eslint-disable-line
                if (/^\/sys\/view\//.test(pathname)) {
                    const keys = pathToRegexp('/sys/view/:key').exec(pathname) || [];
                    const [, key] = keys;
                    if (key) {
                        dispatch({
                            type: 'getData', payload: {
                                time: [moment().subtract(7, 'days'), moment().subtract(1, 'days')],
                                key
                            }
                        });
                    }
                }
            });
        },
    },

  //与后台交互的地方，处理数据逻辑的
    effects: {
//getData，payload是传来的参数，是个对象，如果没参数可以写成{_,{call,put,select}}
*getData({ payload }, { call, put }) {//eslint-disable-line
            const { key } = payload;
            // const { data = {} } = yield call(api.fetch, { ...payload });
  //data 是返回的数据
            yield put({
                type: 'save',//reducers中的方法

                payload: {
                    [key]: key === 'p1' ? data : dd
                },
            });
        },
    },

    reducers: {
      //一般用于修改state，可在function通过connect绑定到props里的dispatch直接调用。
        save(state, action) {
          //return新的state,这样页面就会更新 es6语法，就是把state全部展开，然后把num:num重新赋值，这样后面赋值的num就会覆盖前面的。也是es6语法，相同名字可以写成一个，所以上面接收处写了num
            return { ...state, ...action.payload };
          //传值的对象的别名，所以dispatch里的payload实际上就是给action.payload绑定了相关参数
        },
    },

};
