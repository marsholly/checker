$(()=>{
  createBoard();
  pieces();
  attachHandlers();
  
});


function createBoard(){
  let $rows = [];

  //fill it up
  for(let i = 0; i < 8; i++){
    let $row = $('<div>').addClass('row');

    //fill it with squares
    for(let j = 0; j <8; j++){
      let $squares = $('<div>').addClass('square');
      $row.append($squares);

      if ((i + j) % 2 === 0){
        $squares.addClass('white');
      }else{
        $squares.addClass('black');

      }

    }

  //$squares
    $rows.push($row);
  }

  $('.board').append($rows);
}

function pieces(){
  $('.black').each(function(index){
    $(this).attr('id', index);
    if(index < 12){
      let $blackpiece = $('<div>').addClass('blackpiece piece');
      $(this).append($blackpiece); 
      
    }

    if(index > 19){
      $(this).append($('<div>').addClass('whitepiece piece')); 
    }
  });
}

function attachHandlers(){
   $('.piece').click(select);
}

function select(){
  $('.piece').removeClass('selected');
  $(this).addClass('selected');
  let index = $(this).parent().attr('id');
  $('#'+index).click(move);
  
}

function move(){
  $('.black').click(moveTo);
  
}

// function moveTo(){
//   //console.log('hi');
//   if($(this).children().hasClass('piece')){
//       console.log('hi');
//   }else{
//     let $newpiece = $('<div>').addClass('whitepiece piece');
//     $(this).append($newpiece);
//     $('.piece').removeClass('selected');
//     $(this).children().addClass('selected');
     
//   }

}

