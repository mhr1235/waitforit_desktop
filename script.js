window.setTimeout( function() {
  window.location.reload();
}, 300000);


/*window.setTimeout( function() {
  window.location.reload();
}, 10000);*/


let array = ['https://mhr1235.github.io/waitforit/loader1/','https://mhr1235.github.io/waitforit/loader2/','https://mhr1235.github.io/waitforit/loader3/',
  'https://mhr1235.github.io/waitforit/loader4/','https://mhr1235.github.io/waitforit/loader5/','https://mhr1235.github.io/waitforit/loader6/','https://mhr1235.github.io/waitforit/loader7/',
  'https://mhr1235.github.io/waitforit/loader8/','https://mhr1235.github.io/waitforit/loader9/','https://mhr1235.github.io/waitforit/loader10/','https://mhr1235.github.io/waitforit/loader11/',
  'https://mhr1235.github.io/waitforit/loader12/','https://mhr1235.github.io/waitforit/loader13/','https://mhr1235.github.io/waitforit/loader14/','https://mhr1235.github.io/waitforit/loader15/',
  'https://mhr1235.github.io/waitforit/loader16/','https://mhr1235.github.io/waitforit/loader17/','https://mhr1235.github.io/waitforit/loader18/','https://mhr1235.github.io/waitforit/loader19/',
  'https://mhr1235.github.io/waitforit/loader20/'];
    function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }

  let shuffled_images = shuffle(array);
    let pageContent = "";

 

    for ( let i = 0; i < array.length ; i++) {
  
   pageContent +="<div class='wrap'>" + '<iframe src="'+array[i]+'"></iframe>' + "</div>";
 }


 document.getElementById( 'page' ).innerHTML = pageContent;

