import * as api from './service';

const columns = [
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
    dataIndex: 'projectTypeName',
    name: '研究类型',
  },
  {
    field: 'shengPiHao',
    dataIndex: 'shengPiHao',
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
    dataIndex: 'projectKeyword',
    name: '关键词',
  },
]
var row = [];
const query = {
  bool: {
    must: [],
    filter: []
  }
};
export default {
  namespace: 'pathAnalysis',
  state: {
    pageData: undefined,
    eventData: undefined,
    pageNode: undefined,
    eventNode: undefined,
    clickType: '1',
    dict: {
      infoYear: [
        {name: 2020, value: 2020},
        {name: 2019, value: 2019},
        {name: 2018, value: 2018},
        {name: 2017, value: 2017},
        {name: 2016, value: 2016},
        {name: 2015, value: 2015},
        {name: 2014, value: 2014},
        {name: 2013, value: 2013},
        {name: 2012, value: 2012},
        {name: 2011, value: 2011},
        {name: 2010, value: 2010},
        {name: 2009, value: 2009},
        {name: 2008, value: 2008},
        {name: 2007, value: 2007},
        {name: 2006, value: 2006},
        {name: 2005, value: 2005},
        {name: 2004, value: 2004},
        {name: 2003, value: 2003},
        {name: 2002, value: 2002},
        {name: 2001, value: 2001},
        {name: 1999, value: 1999},
        {name: 1998, value: 1998},
        {name: 1997, value: 1997},
        {name: 1996, value: 1996},
        {name: 1995, value: 1995},
        {name: 1994, value: 1994},
        {name: 1993, value: 1993},
        {name: 1992, value: 1992},
        {name: 1991, value: 1991},
        {name: 1990, value: 1990},
        {name: 1989, value: 1989},
      ],
      infoTypeDict1: [
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
      dependUnit: [
        {value: "100017", name: "郑州大学"},
        {value: "100027", name: "上海交通大学"},
        {value: "100019", name: "中国科学院金属研究所"},
        {value: "100001", name: "南昌航空大学"},
        {value: "100011", name: "河北师范大学"},
        {value: "100015", name: "中国科学院武汉岩土力学研究所"},
        {value: "100020", name: "中国科学院微生物研究所"},
        {value: "100025", name: "河南理工大学"},
        {value: "100010", name: "河南省农业科学院"},
        {value: "100002", name: "北京矿冶科技集团有限公司"},
        {value: "100008", name: "中国疾病预防控制中心环境与健康相关产品安全所"},
        {value: "100003", name: "沈阳地质矿产研究所"},
        {value: "100016", name: "中国社会科学院语言研究所"},
        {value: "100012", name: "上海市激光技术研究所"},
        {value: "201523", name: "哈尔滨工程大学"},
        {value: "400557", name: "东莞理工学院"},
      ],
      infoTypeDict: [{
        value: 218,
        name: "面上项目",
      },
        {
          value: "630",
          name: "青年科学基金项目",
        },
        {
          value: "631",
          name: "地区科学基金项目",
        },
        {
          value: "649",
          name: "专项基金项目",
        },
        {
          value: "220",
          name: "重点项目",
        },
        {
          value: "579",
          name: "联合基金项目",
        },
        {
          value: "339",
          name: "重大研究计划",
        },
        {
          value: "429",
          name: "国家杰出青年科学基金",
        },
        {
          value: "433",
          name: "国际(地区)合作与交流项目",
        },
        {
          value: "2699",
          name: "优秀青年科学基金项目",
        },
        {
          value: "70",
          name: "应急管理项目",
        },
        {
          value: "222",
          name: "重大项目",
        },
        {
          value: "632",
          name: "海外及港澳学者合作研究基金",
        },
        {
          value: "52",
          name: "国家重大科研仪器研制项目",
        },
        {
          value: "432",
          name: "创新研究群体项目",
        },
        {
          value: "51",
          name: "国家重大科研仪器设备研制专项",
        },
        {
          value: "7161",
          name: "科学中心项目",
        },
        {
          value: "10",
          name: "地区项目",
        },]
    },
    events: [],
    pages: [],
    values: {},
    dataSource: {
      columns: [],
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
    * fetch({payload}, {select, call, put}) {
      const {data} = yield call(api.fetch, {
        ...payload,
        clickType: "1"
      });
      const rows = data.row;
      const dataSource = {columns, rows};
      yield put({
        payload: {
          dataSource: dataSource,
          values: payload,
        },
        type: 'save',
      });
    },

    * getResult({payload}, {select, call, put}) {
      console.log("表单参数")
      console.log(payload)
      if (payload.dependUnitId !== undefined && payload.dependUnitId.trim().length !== 0) {
        query.bool.must.push({
          match: {
            "dependunit.id": payload.dependUnitId
          }
        });
      }
      if (payload.projectKeyword !== undefined && payload.projectKeyword.trim().length !== 0) {
        query.bool.filter.push({term: {projectKeywordC: payload.projectKeyword}},);
      }
      if (payload.projectAdminName !== undefined && payload.projectAdminName.trim().length !== 0) {
        query.bool.filter.push({term: {"projectAdmin.name": payload.projectAdminName}},);
      }
      if (payload.shengPiHao !== undefined && payload.shengPiHao.trim().length !== 0) {
        query.bool.filter.push({term: {ratifyNo: payload.shengPiHao}},);
      }
      if (payload.projectTypeName !== undefined && payload.projectTypeName.trim().length !== 0) {
        query.bool.filter.push({term: {"projectType.id": payload.projectTypeName}},);
      }
      query.bool.filter.push(
        {
          range: {
            ratifyYear: {
              gte: payload.startYear,
              lte: payload.endYear
            }
          },

        }
      );
      console.log(query)
      const _data= yield call(api.getResult, {
        query,
      });
      const data = _data.hits.hits;
      query.bool.filter = [];
      query.bool.must = [];
      for (let i = 0; i < data.length; i++) {
        const source = data[i]._source;
        row.push({
          projectName: source.project.name,///data._source.project.name
          projectAdminName: source.projectAdmin.name,//projectAdmin.name
          dependUnitName: source.dependUnit.name,//dependUnit.name
          projectTypeName: source.projectType.name,//projectType.name
          shengPiHao: source.ratifyNo,//ratifyNo
          range5: source.ratifyYear,//ratifyYear
          range6: source.supportNum,//supportNum
          projectKeyword: source.projectKeywordC,//projectKeywordC
        })
      }
      console.log(row);
      const rows = row;
      row = [];
      const dataSource = {columns, rows};
      yield put({
        payload: {
          dataSource: dataSource,
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
