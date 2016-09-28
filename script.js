$(document).ready(function () {
    var price = getParameterByName('price', window.location.href);
    var name = getParameterByName('name', window.location.href);
    var image = getParameterByName('image', window.location.href);
    var url = getParameterByName('url', window.location.href);
    var param0 = getParameterByName('param0', window.location.href);
    var param1 = getParameterByName('param1', window.location.href);
    var param2 = getParameterByName('param2', window.location.href);

    $("#price").text("od "+price+" Kč");
    $("#name").text(name);
    $("#image").attr("src",image);
    $("#url").attr("href",url);
    $("#param0").text(param0);
    $("#param1").text(param1);
    $("#param2").text(param2);
});

// Gets parameter by name
function getParameterByName(name, url) {
    var arr = url.split('#');
    var match = RegExp('[?&]' + name + '=([^&]*)')
        .exec(arr[0]);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
