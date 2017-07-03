(function(window){
    var Route={
        baseURL:'http://127.0.0.1:9090',


        //第一页
        getIndexMenu:getIndexMenu,


        getmoneyctrl:getmoneyctrl,

        getmoneyctrlproduct : getmoneyctrlproduct,


        //category
        getcategory:getcategory,


        //
        getcategorytitle:getcategorytitle,


    //   商品列表

        getproductlist:getproductlist,

        getcategorybyid:getcategorybyid,


        //三级页面,比价详情
        getproduct:getproduct,

        getproductcom:getproductcom,







        getbaicaijiatitle:getbaicaijiatitle,

        getbaicaijiaproduct:getbaicaijiaproduct,


        getinlanddiscount:getinlanddiscount,



        getdiscountchild:getdiscountchild,


        //优惠券
        getcoupon:getcoupon,
        //优惠券子页
        getcouponproduct:getcouponproduct,



    //    凑单品店铺
        getgsshop:getgsshop,

    //    凑单品区域
        getgsshoparea:getgsshoparea,
    //    凑单品商品
        getgsproduct:getgsproduct,


        //商城导航
        getsitenav:getsitenav,

    //    全部分类
        getbrandtitle:getbrandtitle,


        getbrand:getbrand,


        getbrandproductlist:getbrandproductlist










    }

    Route.extend=function(obj){
        for(var k in obj){
            this[k]=obj[k];
        }
    }


    function getIndexMenu(callback){

        var url=Route.baseURL+'/api/getindexmenu';
        $.get(url,function(res){
            callback&&callback(res);
            console.log(res);
        },'json');

    }




    function getmoneyctrl(callback){
       var url=Route.baseURL+'/api/getmoneyctrl';
        $.get(url,function(res){
            callback&&callback(res);
            console.log(res);
           },'json');
    }




    function getmoneyctrlproduct( productid, callback ) {
        var url = Route.baseURL + '/api/getmoneyctrlproduct';
        $.get( url, { productid : productid }, function( res ) {
            callback && callback( res );
            console.log(res);
        }, "json" );
    }

    /**
     * 获取分类的标题信息
     * 方法名：getcategorytitle
     * 请求方式：get
     * 传入参数：无
     *  返回参数: {
                     "result": [{
                     "indexmenuId": “菜单的id”,
                     "name": "菜单的名称",
                     "img": "菜单的图片",
                     "titlehref": "菜单的链接地址"
                     }]
                 }
     * */
    function getcategorytitle(callback){
        var url=Route.baseURL+'/api/getcategorytitle';
        $.get(url,function(res){
            callback&&callback(res);
            console.log(res);
        },'json');
    }



    function getcategory(titleid,callback){
        var url=Route.baseURL+'/api/getcategory';
        $.get(url,{titleid:titleid},function(res){
            callback&&callback(res);
        },'json')
    }




    function getproductlist(categoryid,pageid,callback){
        var url=Route.baseURL+'/api/getproductlist';
        var data={
            categoryid:categoryid?categoryid:0,
            pageid:pageid?pageid:1
        }
        $.get(url,data,function(res){
             callback&&callback(res);
            console.log(res);
        },'json');
    }




    function getproduct(productid,callback){
        var url=Route.baseURL+'/api/getproduct';
        $.get(url,{productid:productid},function(res){
            callback&&callback(res);
            console.log(res);
        },'json')
    }



    function getproductcom(productid,callback){
        var url=Route.baseURL+'/api/getproductcom';
        $.get(url,{productid:productid},function(res){
            callback&&callback(res);
            console.log(res);
        },'json')
    }









    function getcategorybyid(categoryid,callback){
        console.log('xx');
        var url=Route.baseURL+'/api/getcategorybyid';
        $.get(url,{categoryid:categoryid},function(res){
            callback&&callback(res);
            console.log(res);
        },'json');
    }


    function getbaicaijiatitle(callback){
        var url=Route.baseURL+'/api/getbaicaijiatitle';
        $.get(url,function(res){
            callback&&callback(res);

        },'json');
    }


    function getbaicaijiaproduct(titleid,callback){
        var url=Route.baseURL+'/api/getbaicaijiaproduct';
        $.get(url,{titleid:titleid},function(res){
            callback&&callback(res);

        },'json');
    }


    function getinlanddiscount(callback){
        var url=Route.baseURL+'/api/getinlanddiscount';
        $.get(url,function(res){
            callback&&callback(res);
            //console.log(res);
        },'json');
    }




    function getdiscountchild(productid,callback){
        var url=Route.baseURL+'/api/getdiscountproduct';
        $.get(url,{productid:productid},function(res){
            callback&&callback(res);

        },'json')
    }

    //优惠券
    function getcoupon(callback){
        var url=Route.baseURL+'/api/getcoupon';
        $.get(url,function(res){
            callback&&callback(res);

        },'json')
    }

    function getcouponproduct(couponid,callback){
        var url=Route.baseURL+'/api/getcouponproduct';
        $.get(url,{couponid:couponid},function(res){
            callback&&callback(res);
            console.log(res);
        },'json');
    }


    function getgsshop(callback){
        var url=Route.baseURL+'/api/getgsshop';
        $.get(url,function(res){
            callback&&callback(res);
            console.log(res);
        },'json');
    }

    function getgsshoparea(callback){
        var url=Route.baseURL+'/api/getgsshoparea';
        $.get(url,function(res){
            callback&&callback(res);
            console.log(res);
        },'json');
    }

     function getgsproduct(shopid,areaid,callback){
         var url=Route.baseURL+'/api/getgsproduct';
         var data={
             shopid:shopid,
             areaid:areaid
         };
         $.get(url,data,function(res){
             callback&&callback(res);

         },'json');
     }


      function getsitenav(callback){
          var url=Route.baseURL+'/api/getsitenav';
          $.get(url,function(res){
              callback&&callback(res);

          },'json')
      }


      function getbrandtitle(callback){
          var url=Route.baseURL+'/api/getbrandtitle';
          $.get(url,function(res){
              callback&&callback(res);
              console.log(res);
          },'json')
      }


    function getbrand(brandtitleid,callback){
        var url=Route.baseURL+'/api/getbrand';
        $.get(url,{brandtitleid:brandtitleid},function(res){
            callback&&callback(res);
            console.log(res);
        },'json')
    }



    function getbrandproductlist(brandtitleid,pagesize,callback){
        var url=Route.baseURL+'/api/getbrandproductlist';
        $.get(url,{brandtitleid:brandtitleid,pagesize:pagesize},function(res){
            callback&&callback(res);
            console.log(res);
        },'json')
    }













    window.Route = Route;
})(window);