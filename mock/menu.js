const Mock = require('mockjs');
const menuData = [
    {
        title: "国家自然科学基金项目对比",
        key: "nsfcContrast",
        children: [
        {
          title: "同单位历年中标情况对比",
          key: "sameUnit",
        },
        {
          title: "各负责人中标情况对比",
          key: "noSamePeople",
        },
        {
          title: "不同研究领域对比",
          key: "field",
        },
        {
          title: "某一学科对比",
          key: "subject",
        },
        {
          title: "某一领域历年对比",
          key: "yearfield",
        },
        {
          title: "细分领域深度对比",
          key: "fieldsd",
        },
        {
          title: "某一学科多单位对比",
          key: "subjectmoreu",
        },
        {
          title: "某一学科多负责人对比",
          key: "subjectmorep",
        },
        {
          title: "某一学科多负责人对比",
          key: "subjectmorep",
        },
        ]
    },
    {
        title: "地域分析",
        key: "regionalAnalysis",
    },
    {
        title: "users",
        key: "users",
    },
    {
        title: "404",
        key: "404",
    },
    {
        title: "用户行为",
        key: "yonghuxingwei",
        children: [
            {
                title: "路径分析",
                key: "pathAnalysis",
            },
            {
                title: "view1",
                key: "p1",
            },
            {
                title: "view2",
                key: "p2",
            },
            {
                title: "nsfc",
                key: "nsfc",
            },
        ]
    },
    {
        title: "echarts组件",
        key: "echarts",
        children: [
            {
                key: 'Bar',
                title: 'Bar'
            },
            {
                key: 'line',
                title: 'Line'
            },
            {
                key: 'area',
                title: 'Area'
            },
            {
                key: 'yBar',
                title: 'YBar'
            },
            {
                key: 'funnel',
                title: 'Funnel'
            },
            {
                key: 'pie',
                title: 'Pie'
            },
            {
                key: 'pieDoughnut',
                title: 'PieDoughnut'
            },
            {
                key: 'sankey',
                title: 'Sankey'
            },
        ]
    },
    {
        title: "d3.js组件",
        key: "d3Chart",
        children: [
            {
                title: "树图",
                key: "treePage",
            },
        ]
    },
    {
        title: "iframe",
        key: "iframe",
        children: [
            {
                title: "bing",
                key: "bing",
            }
        ]
    },
    {
        title: "图形组件",
        key: "react-charts",
    },
    {
        title: "请给star",
        key: "github",
    },
];
const data = Mock.mock({
    data: menuData,
    status: 0
});
module.exports = {
    [`POST /getMenuData`](req, res) {
        res.status(200).json(data);
    },
};
