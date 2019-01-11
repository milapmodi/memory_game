/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
var matchingCount = 0;
gameTimer();



$('#gameRestart').click(function(){
	 gameTimer();
	 reloadGame();
	 
});

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


$( document ).ready(function() {
   
    $('.card').click(function(event){
    	 event.preventDefault();  
    	 openBox($(this));
    	/* $('.deck').find('.card').removeClass('open');
    	 $(this).addClass('open show');*/
    });
});

//openBox
function openBox(start){ 

	if($(start).hasClass('match'))
	{

	}else{
		if($('.deck').find('.first').length){
			$(start).addClass('open show second');  
			matchingMoveCount();
			setTimeout(function(){ checkMatching()}, 1000);
			var items = $('.deck').length;
			var matching = $('.deck').find('match').length;
			 
		}else{
			$(start).addClass('open show first');

		}
	}	
	
}


//checkMatching
function checkMatching(){

	var first = $('.deck').find('.first');
	var second = $('.deck').find('.second');

	var matchingItemOne = $(first).find('.fa').attr('class');
	var matchingItemTwo = $(second).find('.fa').attr('class'); 
	var items = $('.deck li').length;
	var matchingItem = ( items / 2 );
	console.log('matchingItem:'+matchingItem);
	if(matchingItemOne == matchingItemTwo ){
		 
		$(first).addClass('open show match').removeClass('first');
		$(second).addClass('open show match').removeClass('second');
	
		matchingCount++;
		if(matchingItem == matchingCount) {
			gameResult();
		}
		console.log('matchingCount:'+matchingCount); 
	}else{
		$(first).removeClass('open show first');
		$(second).removeClass('open show second');
	}

	$(".deck").on("click");
}

function matchingMoveCount(){
	var move = $('.moves').text();

	var moveCount = parseInt(move) + 1;
	$('.moves').text(moveCount);
}
 
var timer;
function gameTimer() {
    var countdown = 0;
    clearInterval(timer);
    timer = setInterval(function() { 
    	 countdown += 1000; 
     var min = Math.floor(countdown / (60 * 1000));
  	//var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
 	 var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct	
    $("#time").html(min + " : " + sec);
    if (countdown <= 0) {
      clearInterval(timer);
      gameResult(); 
     } 
    }   , 1000);

}

 function gameResult(){

 	var move = $('.moves').text();
 	var rating ='';
 	if(move <= 8) {
		rating += '<li><i class="fa fa-star"></i></li>';
		rating += '<li><i class="fa fa-star"></i></li>';
		rating += '<li><i class="fa fa-star"></i></li>';
 	}else if(move <= 16){
 		rating += '<li><i class="fa fa-star"></i></li>';
		rating += '<li><i class="fa fa-star"></i></li>'; 
 	}else{
 		rating += '<li><i class="fa fa-star"></i></li>'; 
 	}

 	$('#rating').html(rating);
 	
 }

 function reloadGame(){
 	 var container = $('.deck'); // Container
      var nodes = container.children(); // All children
      $('#rating').html('');
      $('.moves').text('0'); 
      for (var i = 1; i < nodes.length; i++) {
            // Move random child to the end
             $('.deck li').removeClass('open show match');
            container.append(nodes.eq(Math.floor(Math.random() * nodes.length)));
      }
 }