export default [

  {
    title: "基金项目查询",
    link: "/sys/pathAnalysis",
    key: "pathAnalysis",
    icon: "contacts"
  },
  {
    title: "基金项目对比",
    key: "nsfcContrast",
    icon: "contacts",
    children: [
      {
        title: "同单位历年中标对比",
        link: "/sys/nsfcContrast/sameUnit",
        key: "sameUnit",
        icon: "line-chart"
      },
      {
        title: "不同研究领域对比",
        link: "/sys/nsfcContrast/field",
        key: "field",
        icon: "line-chart"
      },
      {
        title: "某一学科对比",
        link: "/sys/nsfcContrast/subject",
        key: "subject",
        icon: "line-chart"
      },
      {
        title: "某一领域历年对比",
        link: "/sys/nsfcContrast/yearfield",
        key: "yearfield",
        icon: "line-chart"
      },
      {
        title: "细分领域深度对比",
        link: "/sys/nsfcContrast/fieldsd",
        key: "fieldsd",
        icon: "line-chart"
      },
      {
        title: "某一学科多单位对比",
        link: "/sys/nsfcContrast/subjectmoreu",
        key: "subjectmoreu",
        icon: "line-chart"
      },
      {
        title: "某一学科多负责人对比",
        link: "/sys/nsfcContrast/subjectmorep",
        key: "subjectmorep",
        icon: "line-chart"
      },
      {
        title: "各负责人中标对比",
        link: "/sys/nsfcContrast/noSamePeople",
        key: "noSamePeople",
        icon: "line-chart"
      },
    ]
  },
    {
        title: "基金项目统计",
        key: "yonghuxingwei",
        icon: "contacts",
        children: [
            {
                title: "按时间范围",
                link: "/sys/view/p1",
                key: "p1",
                icon: "line-chart"
            },
            {
                title: "按依托单位",
                link: "/sys/view/p2",
                key: "p2",
                icon: "bar-chart"
            },
        ]
    },
    {
        title: 'Echarts',
        key: 'echarts',
        icon: 'icon-visual',
        children: [
            {
                link: '/sys/echarts/bar',
                key: 'Bar',
                icon: 'bar-chart',
                title: 'Bar'
            },
            {
                link: '/sys/echarts/line',
                key: 'line',
                icon: 'line-chart',
                title: 'Line'
            },
            {
                link: '/sys/echarts/area',
                key: 'area',
                icon: 'area-chart',
                title: 'Area'
            },
            {
                link: '/sys/echarts/yBar',
                key: 'yBar',
                icon: 'icon-yBar',
                title: 'YBar'
            },
            {
                link: '/sys/echarts/funnel',
                key: 'funnel',
                icon: 'icon-funnel',
                title: 'Funnel'
            },
            {
                link: '/sys/echarts/pie',
                icon: 'pie-chart',
                key: "pie",
                title: 'Pie'
            },
            {
                link: '/sys/echarts/pieDoughnut',
                key: 'pieDoughnut',
                icon: 'icon-pieDoughnut',
                title: 'PieDoughnut'
            },
            {
                link: '/sys/echarts/sankey',
                key: 'sankey',
                icon: 'icon-sankey',
                title: 'Sankey'
            },
        ]
    },
    {
        title: "d3.js组件",
        key: "d3Chart",
        icon: "icon-baobiaofenxi",
        children: [
            {
                title: "树图",
                link: "/sys/treePage",
                key: "treePage",
                icon: "icon-tree"
            },
            {
                title: "桑基图",
                link: "/sys/sankeyPage",
                key: "sankeyPage",
                icon: "icon-mapsankey"
            },
        ]
    },
    {
        title: "用户分析",
        link: "/sys/users",
        key: "users",
        icon: "user"
    },
    {
        title: "404",
        link: "/404",
        key: "404",
        icon: "frown"
    },
];
