$.get("_header.html", contentToInject => {
    $("#header__principal").replaceWith(contentToInject);
});
$.get("_contactanos.html", contentToInject => {
    $("#contactanos").replaceWith(contentToInject);
});
$.get("_footer.html", contentToInject => {
    $("#footer").replaceWith(contentToInject);
});