import * as api from './service';
const columns = [
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
  ];
var rows=[];
const query= {
  bool: {
    should: [],
    filter:[],
  },
}
const dd = {
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
  namespace: 'yearfield',
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
      if (payload.values.subjectType!==undefined&&payload.values.subjectType.trim().length!==0) {
        query.bool.should.push({match: {"project.name":payload.values.subjectType}},);
        query.bool.should.push({match: {"projectKeywordC":payload.values.subjectType}},);
        query.bool.should.push({match: {"projectAbstractC":payload.values.subjectType}},);
      }
      if (payload.values.startYear!==undefined) {
        if (payload.values.endYear!==undefined) {
          query.bool.filter.push({range: {ratifyYear:{
                "gte":payload.values.startYear,
                "lte":payload.values.endYear
              }}},);
        }
      }
      const _query={
        query:query,
        size: 0,
        aggs: {
          "group_by_tags": {
            "terms": { "field": "ratifyYear" ,
              "size": 10000,"order" : {"_key" : "desc" }},
            "aggs": {
              "sum_price": {
                "sum": { "field": "supportNum" }
              }
            }
          }
        }
      };
      //相关学科中标金额top10
      const subjectMoneyQuery={
        query:query,
        size: 0,
        "aggs": {
          "group_by_tags": {
            "terms": { "field": "code" ,"size": 10, "order" : {"sum_price" : "desc" }
            },
            "aggs": {
              "sum_price": {
                "sum": { "field": "supportNum" }
              }
            }
          }
        }
      }
      //相关学科中标数量top10
      const subjectNumQuery={
        query:query,
        size: 0,
        "aggs": {
          "group_by_tags": {
            "terms": { "field": "code" ,"size": 10, "order" : {"_count" : "desc" }
            },
            "aggs": {
              "sum_price": {
                "sum": { "field": "supportNum" }
              }
            }
          }
        }
      }
      //研究领域负责人中标金额top10
      const chargePersonMoneyQuery={
        query:query,
        size: 0,
        "aggs": {
          "group_by_tags": {
            "terms": { "field": "projectAdmin.name" ,"size": 10, "order" : {"sum_price" : "desc" }},
            "aggs": {
              "sum_price": {
                "sum": { "field": "supportNum" }
              }
            }
          }
        }
      }
      //研究领域负责人中标数量top10
      const chargePerNumQuery ={
        query:query,
        size: 0,
        "aggs": {
          "group_by_tags": {
            "terms": { "field": "projectAdmin.name" ,"size": 10, "order" : {"_count" : "desc" }},
            "aggs": {
              "sum_price": {
                "sum": { "field": "supportNum" }
              }
            }
          }
        }
      }
      //研究领域中标金额top10
      const  fieldMoneyQuery={
        query:query,
        size: 0,
        "aggs": {
          "group_by_tags": {
            "terms": { "field": "dependUnit.id" ,"size": 10, "order" : {"sum_price" : "desc" }},
            "aggs": {
              "sum_price": {
                "sum": { "field": "supportNum" }
              }
            }
          }
        }
      }
      //研究领域中标中标数量top10
      const  fieldMNumQuery ={
        query:query,
        size: 0,
        "aggs": {
          "group_by_tags": {
            "terms": { "field": "dependUnit.id" ,"size": 10, "order" : {"_count" : "desc" }},
            "aggs": {
              "sum_price": {
                "sum": { "field": "supportNum" }
              }
            }
          }
        }
      }

      const _result = yield call(api.getsameunit, { _query });
      const subjectMoneyResult = yield call(api.getsameunit, { _query:subjectMoneyQuery });
      const subjectNumResult = yield call(api.getsameunit, { _query:subjectNumQuery });
      const chargePersonMoneyResult = yield call(api.getsameunit, { _query:chargePersonMoneyQuery });
      const chargePerNumResult = yield call(api.getsameunit, { _query:chargePerNumQuery });
      const fieldMoneyResult = yield call(api.getsameunit, { _query:fieldMoneyQuery });
      const fieldMNumResult = yield call(api.getsameunit, { _query:fieldMNumQuery });

console.log(subjectMoneyResult)
console.log(subjectNumResult)
console.log(chargePersonMoneyResult)
console.log(chargePerNumResult)
console.log(fieldMoneyResult)
console.log(fieldMNumResult)




      const  {sameUnit=[],unitType=[]} = _result;
      const  result  = _result.aggregations.group_by_tags.buckets;
      query.bool.should=[]
      query.bool.filter=[]
      var row=[];
      dd_.rows=[];
      for(var i = 0; i<result.length ; i++){
        row.push({
          date:result[i].key_as_string,
          money:result[i].sum_price.value,
          projectsNumber:result[i].doc_count
        })
      }
      for(var j = 0; j<unitType.length ; j++){
        dd_.rows.push({
          title:unitType[j].title,
          money:unitType[j].money,
          projectsNumber:unitType[j].projectsNumber
        })
      }
      rows =row ;
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
