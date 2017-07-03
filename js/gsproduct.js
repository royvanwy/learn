


$(function(){
    setgsshop($('.popsort'));
    setgsarea($('.popcat'));
    setgsproductlist($('.gs-product-list'),{'shopid':0,'areaid':0});
    setfilter($('.filter'));

    function setgsshop(dom,callback){
        Route.getgsshop(function(data){
            var html=template('gsshoptmp',data);
            dom.html(html);
        })
    }


    function setgsarea(dom,callback){
        Route.getgsshoparea(function(res){
            var html=template('gsareatmp',res);
            dom.html(html);
        })
    }


    function setgsproductlist(dom,data,callback){
        var shopid=data.shopid||0;
        var areaid=data.areaid||0;
        Route.getgsproduct(shopid,areaid,function(data){

            var html=template('gsproducttmp',data);
            //console.log(html+'xx')
            dom.html(html);
        })
    }


    function setfilter(dom,data,callback){
        var data = { "result": [{ "selected": "京东", "selectName": "shop" }, { "selected": "华北", "selectName": "area" }, { "selected": "全部价格", "selectName": "price" }] };
        var html=template('filtertmp',data);
        dom.html(html);
    }


    function selectshow(selectname){
        $('#'+selectname).toggleClass('on');
    }


    function getshopproduct(select,shopid,shopname){
        $('.shop').html(shopname+'<i></i>');
        $('.shop').attr('data-id',shopid);
        $('[data-'+select+']').parent().removeClass('on');
        $('[data-' + select + '=' + shopid + ']').parent().addClass('on');
        $('[data-' + select + '=' + shopid + ']').parent().parent().parent().removeClass('on');
        var areaid = $('.filter').find('.area').data('id');
        setproductlist($('.gs-product-list'), { "shopid": shopid, "areaid": areaid });
    }



    function getareaproduct(select,areaid,areaname){
        $('.area').html(areaname+'<i></i>');
        $('.area').attr('data-id',areaid);
        $('[data-'+select+']').parent().removeClass('on');
        $('[data-'+select+'='+areaid+']').parent().addClass('on');
        $('[data-'+select+'='+areaid+']').parent().parent().removeClass('on');
        var shopid=$('.filter').find('.shop').data('id');
        setproductlist($('.gs-product-list'),{'shopid':shopid,'areaid':areaid});
    }

    //
    //










})