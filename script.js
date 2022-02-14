//Some JS to make the elements the right size when scrolling with a mouse wheel to fill the page when going down.
//Take this code out and you'll really see what it does.
function extendDiv(){
	var bottomPaddingSize =  0;
	bottomPaddingSize = window.innerHeight % 132;
	$(".fullPageScrollSection:not(:last-child)")
		.css("padding-bottom",bottomPaddingSize+"px");
}

$(window).on("resize",function(){
	extendDiv();
});
extendDiv();