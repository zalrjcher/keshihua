const Mock = require('mockjs');//eslint-disable-line
const row = [
    {
      projectName: 'TGFβ1介导的整合素α1/α2在牙龈增生性疾病中的作用',
      projectAdminName: "周洁",
      dependUnitName: "武汉大学",
      projectTypeName: "青年科学基金项目",
      shengPiHao: "81200798 ",
      range5: "5233",
      range6:'',
      projectKeyword:'药物性牙龈增生；整合素α1；整合素α2；三维培养;',
    },
  {
    projectName: "TGFβ1介导的整合素α1/α2在牙龈增生性疾病中的作用",
    projectAdminName: "周洁",
    dependUnitName: "武汉大学",
    projectTypeName: "青年科学基金项目",
    shengPiHao: "81200798 ",
    range5: "523",
    range6:'',
    projectKeyword:'药物性牙龈增生；整合素α1；整合素α2；三维培养;',
  },
  {
    projectName: 'TGFβ1介导的整合素α1/α2在牙龈增生性疾病中的作用',
    projectAdminName: "周洁",
    dependUnitName: "武汉大学",
    projectTypeName: "青年科学基金项目",
    shengPiHao: "81200798 ",
    range5: "523",
    range6:'',
    projectKeyword:'药物性牙龈增生；整合素α1；整合素α2；三维培养;',
  },
  ];
const dict = Mock.mock({
        'eventDict|4-6': [
            '@string("lower", 5)'
        ],
        'pageDict|4-6': [
            '@cword(5,7)'
        ],
});
module.exports = {
    [`POST /getPath`](req, res) {
        console.log(req);
        res.status(200).json({
            data: {
              row: row
            },
            status: 0
        });
    },
    [`POST /getPathDict`](req, res) {
        res.status(200).json({
            data: dict,
            status: 0
        });
    },
};
