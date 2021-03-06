import * as api from './service';
  var columns = [
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
  ]

var rows=  [
]
const query={
  bool:{
    must:[],
  },

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
  namespace: 'noSamePeople',
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
      dependUnit:[
        {value:"100017",name:"郑州大学"},
        {value:"100027",name:"上海交通大学"},
        {value:"100019",name:"中国科学院金属研究所"},
        {value:"100001",name:"南昌航空大学"},
        {value:"100011",name:"河北师范大学"},
        {value:"100015",name:"中国科学院武汉岩土力学研究所"},
        {value:"100020",name:"中国科学院微生物研究所"},
        {value:"100025",name:"河南理工大学"},
        {value:"100010",name:"河南省农业科学院"},
        {value:"100002",name:"北京矿冶科技集团有限公司"},
        {value:"100008",name:"中国疾病预防控制中心环境与健康相关产品安全所"},
        {value:"100003",name:"沈阳地质矿产研究所"},
        {value:"100016",name:"中国社会科学院语言研究所"},
        {value:"100012",name:"上海市激光技术研究所"},
        {value:"201523",name:"哈尔滨工程大学"},
        {value:"400557",name:"东莞理工学院"},
      ],
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
      if (payload.data.startTime!==undefined&&payload.data.startTime!=="") {
        if (payload.data.endTime!==undefined&&payload.data.endTime!=="") {
          query.bool.must.push({range: {ratifyYear:{
                "gte":payload.data.startTime,
                "lte":payload.data.endTime
              }}},);
        }
      }
      if (payload.data.dependUnitName!==undefined&&payload.data.dependUnitName.trim().length!==0) {
        query.bool.must.push({match: {"dependUnit.id":payload.data.dependUnitName}},);
        // alert(1)
      }
      const _query={
        query:query,
        size: 0,
        aggs: {
          "group_by_tags": {
            "terms": {"field": "projectAdmin.name" ,"size":20},
            "aggs": {
              "sum_supportNum":{
                "sum":{"field":"supportNum"}
              }
            }
          }
        }
      };
      const  _result= yield call(api.getsameunit, {_query });
      const  {sameUnit=[],unitType=[]} =_result;
      const  result  = _result.aggregations.group_by_tags.buckets;
      query.bool.must=[];//清空之前的数据
      var row =[];
      for(var i = 0; i<result.length ; i++){
        row.push({
          date:result[i].key,
          money:result[i].sum_supportNum.value,
          projectsNumber:result[i].doc_count
        })
      }
      rows = row;
      const  data ={columns,rows}
      yield put({
        type: 'save',
        payload: {
          data:data,
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
