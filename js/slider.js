var numItems=$('.items_list_slider li').length;
$('.items_list_slider').css({
	'width':(numItems*100)+'%'
});
/*
 *controla la vista actual  y empieza en 0 (primer slideItem)
*/	
var actualViewPosition=0;

var maxPositionViewSlider=(numItems-1)*(-100);	
changeItemView();

$('#arrow_right').on('click',function(){
	moveRight();	
});

function moveRight(){
	actualViewPosition=actualViewPosition-100;	
	if(actualViewPosition<maxPositionViewSlider){
		actualViewPosition=0;
	}
	changeItemView();	
}
$('#arrow_left').on('click',function(){
	moveLeft();	
});

function moveLeft(){
	actualViewPosition=actualViewPosition+100;	
	if(actualViewPosition>0){
		actualViewPosition=maxPositionViewSlider;
	}
	changeItemView();	
}
function changeItemView(){		
	$('.items_list_slider').css({
		'margin-left':actualViewPosition+'%'
	});
}


	





