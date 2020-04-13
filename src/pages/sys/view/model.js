// import pathToRegexp from 'path-to-regexp';
 import * as api from './service';
const data_1 =  {
    "columns": [],
    "rows": []
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
      titleText:'',
      dict:{
        infoYear:[
          {name:2020, value:2020},
          {name:2019, value:2019},
          {name:2018, value:2018},
          {name:2017, value:2017},
          {name:2016, value:2016},
          {name:2015, value:2015},
          {name:2014, value:2014},
          {name:2013, value:2013},
          {name:2012, value:2012},
          {name:2011, value:2011},
          {name:2010, value:2010},
          {name:2009, value:2009},
          {name:2008, value:2008},
          {name:2007, value:2007},
          {name:2006, value:2006},
          {name:2005, value:2005},
          {name:2004, value:2004},
          {name:2003, value:2003},
          {name:2002, value:2002},
          {name:2001, value:2001},
          {name:1999, value:1999},
          {name:1998, value:1998},
          {name:1997, value:1997},
          {name:1996, value:1996},
          {name:1995, value:1995},
          {name:1994, value:1994},
          {name:1993, value:1993},
          {name:1992, value:1992},
          {name:1991, value:1991},
          {name:1990, value:1990},
          {name:1989, value:1989},
        ],
      }
    },
    subscriptions: {
        setupHistory({ dispatch, history }) {
            history.listen(({ pathname, query, state }) => { // eslint-disable-line
                if (/^\/sys\/view\//.test(pathname)) {
                    // const keys = pathToRegexp('/sys/view/:key').exec(pathname) || [];
                }
            });
        },
    },

  //与后台交互的地方，处理数据逻辑的
    effects: {
//getData，payload是传来的参数，是个对象，如果没参数可以写成{_,{call,put,select}}
*getData({ payload }, { call, put }) {//eslint-disable-line
            const { key } = payload;
            const { data}  = yield call(api.getYearResult, { ...payload });
            const name = data.result.name;
            data_1.columns=[];
            data_1.columns.push(
              {
                "field": "time",
                "name": "时间",
                "type": "string"
              },{
                "field": "oen",
                "name":name ,
                "type": "string"
              },

            );
            data_1.rows=[]
              for(let i = 0; i < data.result.row.length;i++){
                data_1.rows.push({
                  "time": data.result.row[i].time,
                  "oen": data.result.row[i].nmu,
                })
               }
            yield put({
                type: 'save',//reducers中的方法
                payload: {
                    [key]: key === 'p1' ? data_1 : dd,
                  titleText:name
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
