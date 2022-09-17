    var current     = window.location.href;
    var g_confirm   = current.includes('c=1');
    var go_ads      = "https://www.highperformancecpm.com/n0qvec7g?key=3e91a49c2f0921328b37e037d8843b7e";

    $(document).ready(function()
    {
        if(!g_confirm && !go_ads.includes('#YOUR'))
        {
            $(window).scroll(function (event) {
                var scroll = $(window).scrollTop();
                if (scroll >= 200) {
                    $('#popbox').removeClass('hide');
                }
                console.log('scroll..');                    
            });
        }

        $(document).on('click','.g_url',function(e)
        {
            e.preventDefault();

            var g_target=current.includes("?")?current+"&c=1":current+"?c=1";

            window.open(go_ads,"_blank");
            window.location.href=g_target;
        });

        $("[id*='google-cache']").remove();        

        $(document).on('submit','#search-box',function(e){
            e.preventDefault();
            var query = $('input[name="q"]').val();
            query = query.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/\s\s+/g, ' ');
            var target = 'site:'+location.host+' '+query;
            var uri= 'https://www.google.com/search?q='+encodeURIComponent(target);
            window.open(uri, '_blank');
        });

        $(document).on('click','.ads-img',function(e)
        {
            e.preventDefault();
            window.open(go_ads, '_blank');
        });
    });
