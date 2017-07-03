$(function() {
    setsitenav($('.site-nav'))

    // 获取所有商城导航的列表信息 并渲染到页面上
    function setsitenav(dom, callback) {
        Route.getsitenav( function( data ) {
            var html = template('sitenavtmp', data);
            console.log(data);
            dom.html(html);
        });
    }
})
