console.log('Loaded!');

//change the text of the main-text div

var element= document.getElementById('main-text');
element.innerHTML='Vipul';

//move the image
var img=document.getElementById('madi');
marginLeft=0;
function moveRight() {
    marginLeft=marginLeft + 1;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick=function() {
    var interval=setInterval(moveRight,50);
};

//counter code

var button=document.getElementById('counter');
var counter=0;

button.onclick=function() {
  //make a request to the counter endpoint
  
  //capture the response and store in a variable
  
  //render the variable in the coreect span
  counter=counter+1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
};

