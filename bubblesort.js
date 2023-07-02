// Bubble sort Implementation using Javascript

// Creating the bblSort function
function bblSort() {

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
    
	for (var i = 0; i < arr.length; i++) {

		// Last i elements are already in place
    document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+"ITERATION"+(i+1)+": ";
		for (var j = 0; j < (arr.length - i - 1); j++) {

			// Checking if the item at present iteration
			// is greater than the next iteration
			if (arr[j] > arr[j + 1]) {

				// If the condition is true
				// then swap them
				var temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
            
		}
        document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+arr;
            document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+"<br>";

	}

	// Print the sorted array
    document.getElementById("demo1").innerHTML=document.getElementById("demo1").innerHTML+"Sorted array " +arr;

}


