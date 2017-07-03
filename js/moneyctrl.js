$(function(){
    setmoneyctrl($('.money-ctrl'), $.getUrlParam('pageid')||1);

    function setmoneyctrl(dom,pageid,callback){
        //console.log(dom);
        Route.getmoneyctrl(function(data){
            data.pageCount=Math.floor(data.totalCount/data.pagesize);
            data.pageid=pageid||1;
            data.page=[];
            for(var i=0;i<data.pageCount;i++){
                data.page.push({'pageid':i+1,'pageCount':data.pageCount});
            }

            //console.log(data);
            var html=template('monyctrltmp',data);
            $(dom).html(html);
            $('#selectPage').on('change',function(e){
                window.location.href='moneyctrl.html?pageid='+$(this).val();
                $(this).attr('selected','selected');
            })
        })
    }
})