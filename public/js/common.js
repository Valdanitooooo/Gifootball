$(document).on('click', '#cn_choose', function (event) {
    event.stopPropagation();
    event.preventDefault();
    var url = window.location.href;
    var new_url = url;
    if (-1 != url.indexOf('/cn/')) {
        return;
    }
    if (-1 == url.indexOf('/en/')) {
        new_url = url + "cn/";
    } else {
        new_url = url.replace("/en/", "/cn/");
    }
    window.location.href = new_url;
})
$(document).on('click', '#en_choose', function (event) {
    event.stopPropagation();
    event.preventDefault();
    var url = window.location.href;
    var new_url = url;
    if (-1 != url.indexOf('/en/')) {
        return;
    }
    if (-1 == url.indexOf('/cn/')) {
        new_url = url + "en/";
    } else {
        new_url = url.replace("/cn/", "/en/");
    }
    window.location.href = new_url;
})