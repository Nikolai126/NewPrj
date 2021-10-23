if (document.documentElement.clientWidth < 630) {
    console.log(document.documentElement.clientWidth);
    document.body.style.zoom="65%";
}
else {
    document.body.style.zoom="100%";
};

$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-menu').toggleClass('active');
    });
});
