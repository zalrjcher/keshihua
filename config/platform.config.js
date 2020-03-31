
// 菜单权限：true(开启) false(关闭)
// let GLOBAL_MENU_PERMISSION;
// if (process && process.env.NODE_ENV === 'development') {
//     GLOBAL_MENU_PERMISSION = false;
// } else {
//     GLOBAL_MENU_PERMISSION = true;
// }

module.exports = {
    // 数据请求api
    apiPrefix: document.head.dataset.api || '',
    iframePrefix: document.head.dataset.iframe || '',
    loginLogo: 'logo_blue_1024.png',
    sysLogo: 'logo.png',
    // 登录页名称
    loginName: '国家自然科学基金可视化数据平台',
    // 系统名称
    sysName: 'NSFC',
    // 版权
    copyright: "2019 zalrjcher@163.com.",
    // 是否开启菜单权限校验
    menuPermission: true,
    // table默认一页条数
    pageSize: 10,
    // iconFont 地址
    iconUrl: '//at.alicdn.com/t/font_1030595_depmdbpf3yc.js',
    // 系统默认首页
    sysDefultPage: {
        pathname: '/sys/pathAnalysis',
        state: {
            key: 'pathAnalysis',
            pathtitles: [{ title: 'pathAnalysis', icon: 'pathAnalysis' }],
        }
    },
};
