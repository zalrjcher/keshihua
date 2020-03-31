import * as api from './service';

 const columns=[
    {
      field: 'projectName',
      dataIndex: 'projectName',
      name: '项目名称',
    },
    {
      field: 'projectAdminName',
      dataIndex: 'projectAdminName',
      name: '负责人',
    },
    {
      field: 'dependUnitName',
      dataIndex: 'dependUnitName',
      name: '申请单位',
    },
    {
      field: 'projectTypeName',
      dataIndex:'projectTypeName',
      name: '研究类型',
    },
    {
      field: 'shengPiHao',
      dataIndex:'shengPiHao',
      name: '项目批准号',
    },
    {
      field: 'range5',
      name: '批准年度',
    },
   {
     field: 'range6',
     name: '金额',
   },
   {
     field: 'projectKeyword',
     dataIndex:'projectKeyword',
     name: '关键词',
   },
  ]
export default {
  namespace: 'pathAnalysis',
  state: {
    pageData: undefined,
    eventData: undefined,
    pageNode: undefined,
    eventNode: undefined,
    clickType: '1',
    dict: {
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
    dataSource:{
      columns:[],
      row: [],
    }
  },

  subscriptions: {
    setupHistory({dispatch, history}) {
      history.listen(({pathname, query, state}) => { // eslint-disable-line
        if (pathname.indexOf('sys/pathAnalysis') > -1) {
          dispatch({type: 'getDict', payload: {timeType: 'day'}});
        }
      });
    },
  },

  effects: {
    * fetch({payload}, {select,call, put}) {
      const {data} = yield call(api.fetch, {
        ...payload,
        clickType: "1"
      });
      const rows =data.row;
      const dataSource={columns,rows};
      yield put({
        payload: {
          dataSource:dataSource,
          values: payload,
        },
        type: 'save',
      });

    },
    * getDict({payload}, {call, put}) {
      const {data} = yield call(api.getInfoTypeDict, {...payload});
      const {eventDict: events, pageDict: pages} = data;
      yield put({
        type: 'save',
        payload: {
          events,
          pages
        },
      });
    },
    * _fetch({payload}, {call, put, select}) {
      const {values} = yield select(state => state.pathAnalysis);
      const {events, pages, ...rest} = values;//eslint-disable-line
      const param = {
        ...rest,
        ...payload,
      };
      const {data} = yield call(api.fetch, param);
      const {pathData: pageData, eventData} = data;
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
      return {...state, ...action.payload};
    },
  },

};
