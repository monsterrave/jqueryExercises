$( document ).ready(function() {
    
//#1
    console.log( "ready!" );

//#2
$('span').hide();

//#3

$('span.hidden').hide();

//#4

$('#listOne').first('li').hide();
$('#listTwo').children().eq(1).hide();

//#5

$('#listTask5').children().eq(0,2,5).css("color":"green");

//#6

$('#task6').on('click' function() {
	alert('hello');
});

//#7

$('#task7').on('keyup' fucntion() {
	var inputKeys = $(this).val();   //holt sich den String Value
	$('span#greeting' + inputKeys);
});

//#8

$('#hoverAction').on('hover' function() {
	$(this).children().eq(1).css({"background" : "black",
								"color" : "white"});

});

//#9

$('#task9List').children().eq(0 , 2).on('click' function(){ 
	$(this).hide();
});

$('#task9List').children('li.fade').on('click' function() {
	$(this).fadeOut(200);
});



});