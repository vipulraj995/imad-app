var button=document.getElementById('counter');
 
 
 
 button.onclick=function()
 {
   //make a request to the  counter endpoint
   var request=new XMLHttpRequest();
   //capture the response and store in a variable
   request.onreadystatechange =function()
   {
     
       if(request.readyState === XMLHttpRequest.DONE)
       {
           if(request.status ===200)
           {
               var counter = request.responseText;
               var spon =document.getElementById('count');
               span.innerHTML =counter.toString();
           }
       }

   };
     
 };
   request.open('GET','http://vipulraj995.imad.hasura-app.io/counter',true);
 request.send(null);
   //render the variable in the coreect span
   
 
 
 var submit=document.getElementById('submit_btn');
 submit.onclick = function()
 {
     var request = new XMLHttpRequest();
     
     request.onreadystatechange = function()
     {
         if(request.readyState === XMLHttpRequest.DONE) {
         if(request.status ===200)
         { var names=request.responseText;
         names =JSON.pasrse(names);
         var list = '';
         for (var i=0;i<names.length;i++) {
             list += '<li>' + names[i] + '</li>';
         }
         
         var ul=document.getElementByID('namelist');
         ul.innerHTML = list;
         }
     }
         
 };
 var nameInput=document.getElementById('name');
 var name=nameInput.value;
  request.open('GET','http://vipulraj995.imad.hasura-app.io/submit-name?name='+name. true);
 }; 
 console.log('Loaded!'); 