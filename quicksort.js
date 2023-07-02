function Quicksort(){
    var i, j, min_idx;
    
    var e1=document.getElementById("inputarr").value;
    
    var x=e1.split(' ');
    var Arr=[];
    var index=0;
    while(true){
        if(x[index]!=undefined){
            Arr[index]=x[index];
            index++;
        }
        else{
            break;
        }
    }

    var sortedArray = quick_Sort(Arr);
    
        document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+" " +sortedArray;
    
    
}
function quick_Sort(origArray) {
    if (origArray.length <= 1) { 
        return origArray;
    } else {

        var left = [];
        var right = [];
        var newArray = [];
        var pivot = origArray.pop();
        var length = origArray.length;

        for (var i = 0; i < length; i++) {
            if (origArray[i] <= pivot) {
                left.push(origArray[i]);
                
            } else {
                right.push(origArray[i]);
               
            }
           
        }
        document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+"left: " +left+"; "+"pivot:"+pivot+"; "+"right"+right+";";
        document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+"<br>";
        document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+" " +origArray+";";
        document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+"<br>";
        return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
    }
}