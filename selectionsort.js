
function selectionSort()
{
	var i, j, min_idx;
    
    var e1=document.getElementById("inputarr").value;
    
    var x=e1.split(' ');
    var arr=[];
    var index=0;
    while(true){
        if(x[index]!=undefined){
            arr[index]=x[index];
            index++;
        }
        else{
            break;
        }
    }
    
    for (var i = 0; i < index; i++) {  
        document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+"ITERATION"+(i+1)+": ";
         var temp=arr[i];
         var minindex=0;
         for(var j=i+1;j<index;j++){
            if(temp>arr[j]){
                temp=arr[j];
                minindex=j;
            }
         } 
        if(arr[i]!=temp){
            var temp2=arr[minindex];
            arr[minindex]=arr[i];
            arr[i]=temp2;
        }
        for(var k=0;k<index;k++){
            document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+" " +arr[k];
        }
        document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+"<br>";
        
    } 
    
	 
    
    
    
}


    
    



