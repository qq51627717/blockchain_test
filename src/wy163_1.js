(function(){
    var check_webp_feature, store, storeResult, cache_key = 'YX_WEBP_FLAG_CACHE', initialHandler;
    window.yanxuan_webp_cache = {
    'YX_WEBP_DETECT_FLAG': false,
    'YX_WEBP_HAS_DETECT': false
    };
    check_webp_feature = function (feature, callback) {
    var kTestImages = {
    lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA'
    };
    var img = new Image();
    img.onload = function () {
    var result = (img.width > 0) && (img.height > 0);
    callback(feature, result);
    };
    img.onerror = function () {
    callback(feature, false);
    };
    img.src = 'data:image/webp;base64,' + kTestImages[feature];
    };
    initialHandler = function(result){
    var htmlEle, htmlCls;
    window.yanxuan_webp_cache.YX_WEBP_DETECT_FLAG = result;
    window.yanxuan_webp_cache.YX_WEBP_HAS_DETECT = true;
    if(result){
    // 先缓存判断结果
    store && store.set(result);
    htmlEle = document.getElementsByTagName('html')[0];
    htmlCls = htmlEle.getAttribute('class') || '';
    htmlEle.setAttribute('class', htmlCls + ' webp');
    }
    };
    if(window.localStorage){
    store = {
    get: function(){
    return window.localStorage.getItem(cache_key);
    },
    set: function(result){
    window.localStorage.setItem(cache_key, result);
    }
    };
    storeResult = store.get();
    if(storeResult){
    initialHandler(storeResult === 'true' ? true : false)
    }else {
    check_webp_feature('lossy', function(feature, result){
    initialHandler(result)
    });
    }
    }else {
    check_webp_feature('lossy', function(feature, result){
    initialHandler(result)
    });
    }
    }());