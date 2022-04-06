$("ul").on("click" , "li",function(){
	$(this).toggleClass("completed");

});

$("ul").on("click", "span",function(event){
	// alert("Span is clicked");
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event)
{
	// console.log("key press");
	if(event.which === 13)
	{
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='a fa-trash'></i> </span> " + todoText + "</li>");
	}
});
$(".fa-plus").click(function(){
$("input[type='text'").fadeToggle();
});