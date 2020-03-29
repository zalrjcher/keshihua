const Mock = require('mockjs');//eslint-disable-line
const pathdata = {
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
                pathData: pathdata
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
