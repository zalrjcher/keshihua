import * as api from './service';
const dd = {
  columns: [
    {
      field: 'date',
      name: '日期',
    },
    {
      field: 'projectsNumber',
      name: '项目数量',
    },
    {
      field: 'money',
      name: '资助金额',
    },
  ],
  rows: [
  ]
};

const dd_ = {
  columns: [
    {
      field: 'title',
      name: '项目名称',
    },
    {
      field: 'projectsNumber',
      name: '项目数量',
    },
    {
      field: 'money',
      name: '资助金额',
    },
  ],
  rows: [
  ]
};
export default {
  namespace: 'subjectmorep',
  state:{
    data:{},
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
      infoSubject:[
        {name:"数理科学部", value:"A"},
        {name:"化学科学部", value:"B"},
        {name:"生命科学部", value:"C"},
        {name:"地球科学部", value:"D"},
        {name:"信息科学部", value:"F"},
        {name:"管理科学部", value:"G"},
        {name:"医学科学部", value:"H"},
        {name:"计划局", value:"J"},
        {name:"联合基金领域", value:"L"},
        {name:"办公室", value:"M"},
        {name:"国际合作局", value:"R"},
      ]
    }
  },

  subscriptions: {
    setupHistory({dispatch, history}) {
      history.listen(({pathname, query, state}) => { // eslint-disable-line
        if (pathname.indexOf('sys/nsfcContrast/sameUnit') > -1) {
          dispatch({type: 'getDict', payload: {timeType: 'day'}});
        }
      });
    },
  },

  effects: {
    * getDict({payload}, {call, put}) {
      yield put({
        type: 'save',
        payload: {},
      });
    },
    * getData({payload}, {call, put}) {
      const {sameUnit=[],unitType=[]}  = yield call(api.getsameunit, { ...payload });
      dd.rows=[];
      dd_.rows=[];
      for(var i = 0; i<sameUnit.length ; i++){
        dd.rows.push({
          date:sameUnit[i].time,
          money:sameUnit[i].money,
          projectsNumber:sameUnit[i].projectsNumber
        })
      }
      for(var j = 0; j<unitType.length ; j++){
        dd_.rows.push({
          title:unitType[j].title,
          money:unitType[j].money,
          projectsNumber:unitType[j].projectsNumber
        })
      }
      yield put({
        type: 'save',
        payload: {
          data:dd,
          unitType:dd_
        },
      });
    },
  },
  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
  },
}
