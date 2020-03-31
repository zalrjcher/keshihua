const Mock = require('mockjs');//eslint-disable-line
const result = {
    name:"武汉大学",
    row:[
      {time:'2018',nmu:'315613'},
      {time:'2017',nmu:'3214'},
      {time:'2016',nmu:'4132'},
      {time:'2015',nmu:'1324'},
      {time:'2014',nmu:'42354'},
      {time:'2013',nmu:'13241'},
      {time:'2012',nmu:'54325'},
      {time:'2011',nmu:'132431'},
      {time:'2010',nmu:'34314'},
      {time:'2009',nmu:'134'},
    ]
};
const sameUnit=[
  {time:'2009',money:'4343125',projectsNumber:'4311431'},
  {time:'2008',money:'4254234',projectsNumber:'75341316'},
  {time:'2007',money:'1431341',projectsNumber:'12343124'},
  {time:'2006',money:'1324354',projectsNumber:'53435645'},
  {time:'2005',money:'2431345',projectsNumber:'43524311'},
  {time:'2004',money:'2413464',projectsNumber:'42341325'},
  {time:'2003',money:'5236536',projectsNumber:'85578574'},
];
const unitType=[
  {title:'面上项目',money:'4343125',projectsNumber:'4311431'},
  {title:'青年科学基金项目',money:'4254234',projectsNumber:'75341316'},
  {title:'重点项目',money:'1431341',projectsNumber:'12343124'},
  {title:'重大项目',money:'1324354',projectsNumber:'53435645'},
  {title:'联合基金项目',money:'2431345',projectsNumber:'43524311'},
  {title:'优秀青年科学基金项目',money:'2413464',projectsNumber:'42341325'},
  {title:'重大研究计划',money:'52362336',projectsNumber:'85578874'},
  {title:'国际合作与交流项目',money:'52364236',projectsNumber:'85548574'},
  {title:'国家杰出青年科学基金',money:'5233536',projectsNumber:'86578574'},
];


module.exports = {
  [`POST /getYearResult`](req, res) {
    console.log(req);
    res.status(200).json({
      data: {
        result: result
      },
    });
  },
  [`POST /getPathDict`](req, res) {
    res.status(200).json({
      data: '',
      status: 0
    });
  },
  [`POST /getsameunit`](req, res) {
    res.status(200).json({
      sameUnit: sameUnit,
      unitType:unitType,
    });
  },
};
