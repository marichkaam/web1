//task 1.6
var arra = [234, 43, 55, 63,  5, 6, 235, 547];
function bublSort(arra){
    
    for(var i = 0; i < arra.length; i++){
       
      for(var j = 0; j < ( arra.length - i -1 ); j++){
         
        if(arra[j] > arra[j+1]){
           
          var temp = arra[j]
          arra[j] = arra[j + 1]
          arra[j+1] = temp
        }
      }
    }
    console.log(arra);
   }

   bublSort(arr);