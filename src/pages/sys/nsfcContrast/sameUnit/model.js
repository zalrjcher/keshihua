import * as api from './service';

var subjectList=[
    {
      "id": "A",
      "name": "数理科学部"
    },
    {
      "id": "B",
      "name": "化学科学部"
    },
    {
      "id": "C",
      "name": "生命科学部"
    },
    {
      "id": "D",
      "name": "地球科学部"
    },
    {
      "id": "E",
      "name": "工程与材料科学"
    },
    {
      "id": "F",
      "name": "信息科学部"
    },
    {
      "id": "G",
      "name": "管理科学部"
    },
    {
      "id": "H",
      "name": "医学科学部"
    },
    {
      "id": "J",
      "name": "计划局"
    },
    {
      "id": "L",
      "name": "联合基金领域"
    },
    {
      "id": "M",
      "name": "办公室"
    },
    {
      "id": "R",
      "name": "国际合作局"
    }
]
var typeList=[
  {
    "name": "青年科学基金项目",
    "value": "630"
  },
  {
    "name": "地区科学基金项目",
    "value": "631"
  },
  {
    "name": "面上项目",
    "value": "218"
  },
  {
    "name": "海外及港澳学者合作研究基金",
    "value": "632"
  },
  {
    "name": "重点项目",
    "value": "220"
  },
  {
    "name": "重大项目",
    "value": "222"
  },
  {
    "name": "重大研究计划",
    "value": "339"
  },
  {
    "name": "国家杰出青年科学基金",
    "value": "429"
  },
  {
    "name": "创新研究群体项目",
    "value": "432"
  },
  {
    "name": "国际(地区)合作与交流项目",
    "value": "433"
  },
  {
    "name": "专项基金项目",
    "value": "649"
  },
  {
    "name": "联合基金项目",
    "value": "579"
  },
  {
    "name": "应急管理项目",
    "value": "70"
  },
  {
    "name": "科学中心项目",
    "value": "7161"
  },
  {
    "name": "国家基础科学人才培养基金",
    "value": "635"
  },
  {
    "name": "优秀青年科学基金项目",
    "value": "2699"
  },
  {
    "name": "专项项目",
    "value": "8531"
  },
  {
    "name": "国家重大科研仪器设备研制专项",
    "value": "51"
  },
  {
    "name": "国家重大科研仪器研制项目",
    "value": "52"
  },
  {
    "name": "海外或港、澳青年学者合作研究基金",
    "value": "2733"
  }]
 const columns= [
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
 var rows=[
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
const data1 = {
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
  namespace: 'sameUnit',
  state:{
    data:{
      columns:[],
      row: [],
    },
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
      console.log(payload)
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
            "terms": { "field": "ratifyYear","size":30},
            "aggs": {
              "supportNum": {
                "sum": {
                  "field": "supportNum"
                }
              }
            }
          },
          "group_by_code": {
            "terms": {
              "field": "code",
              "script": {
                "source": "_value.substring(0,1)"
              },
              "size": 20
            },
            "aggs": {
              "supportNum": {
                "sum": {
                  "field": "supportNum"
                }
              }
            }
          },
          "group_by_type": {
            "terms": {
              "field": "projectType.id",
              "size": 20
            },
            "aggs": {
              "supportNum": {
                "sum": {
                  "field": "supportNum"
                }
              }
            }
          }
        }
      };
      const _result= yield call(api.getsameunit,  _query );
      console.log("同单位的历年中标情况的对比")
      const  result  = _result.aggregations.group_by_tags.buckets;
      const  result1  = _result.aggregations.group_by_code.buckets;
      const  result2  = _result.aggregations.group_by_type.buckets;
      console.log(result)
      query.bool.must=[];//清空之前的数据
      var row =[];
      for(var i = 0; i<result.length ; i++){
        row.push({
          date:result[i].key_as_string,
          money:result[i].supportNum.value,
          projectsNumber:result[i].doc_count
        })
      }
      var row1 =[];
      for(var i = 0; i<result1.length ; i++){
        var name ;
        for (var j = 0; j <subjectList.length ; j++) {
            if(result1[i].key ===subjectList[j].id){
              name=subjectList[j].name
            }
        }
        row1.push({
          title:name,
          money:result1[i].supportNum.value,
          projectsNumber:result1[i].doc_count
        })
      }

      var row2 =[];
      for(var i = 0; i<result2.length ; i++){
        var name ;
        for (var h = 0; h <typeList.length ; h++) {
          if(result2[i].key ===typeList[h].value){
            name=typeList[h].name
          }
        }
        row2.push({
          title:name,
          money:result2[i].supportNum.value,
          projectsNumber:result2[i].doc_count
        })
      }
      rows = row;
      const  data ={columns,rows}
      dd_.rows =row1
      data1.rows=row2
      yield put({
        type: 'save',
        payload: {
          data:data,
          unitType:dd_,
          data1:data1
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
