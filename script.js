$(document).ready(function () {
    var price = getParameterByName('price', window.location.href);
    var name = getParameterByName('name', window.location.href);
    var image = getParameterByName('image', window.location.href);
    var url = getParameterByName('url', window.location.href);

    $("#price").text(price);
    $("#name").text(name);
    $("#image").text(image);
    $("#url").text(url);
});

// Gets parameter by name
function getParameterByName(name, url) {
    var arr = url.split('#');
    var match = RegExp('[?&]' + name + '=([^&]*)')
        .exec(arr[0]);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
