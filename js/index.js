$(function () {
    setMenu($('#menu>.row'));
    setMoneyCtrlProduct($('.product-list'));


    function setMenu(dom, callback) {
        var $lastFour;
        Route.getIndexMenu(function (res) {
            var html = template('indexmenutmp', res);
            //console.log(dom);
            dom.html(html);
            $lastFour = $(dom).children('.menu-item:nth-last-child(-n+4)');

            $lastFour.addClass('hide');

            menuMore($(dom).find('.menu-item:nth-last-child(8)>a'));
        })


        function menuMore(dom, callback) {
            $(dom).on('click', function () {
                $lastFour.toggleClass('hide');
                //console.log("xx")
            })
        }

    }

    //省钱空第一页内容展示
    function setMoneyCtrlProduct(dom, pageid, callback) {
        Route.getmoneyctrl(function (data) {
            //console.log(data);
            var html = template('moneyctrltmp', data);
            dom.html(html);
        })
    }




});


