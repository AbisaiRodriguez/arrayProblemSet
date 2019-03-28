
//Prints array in reverse order
function printReverse(array) {
    for(var i = array.length-1; i >= 0; i--){
       console.log(array[i]);
    }   
}

//Checks if the array's elements are all the same
function isUniform(array) {
    var first = array[0];
    for(var i = 1; i <= array.length-1; i++){
        if(first !== array[i]){
            return false;
        }
    }
    return true;
}

//Prints the sum of the array
function sumArray(array){
    var sum = 0;
    for(var i = 0; i <= array.length-1; i++){
        sum += array[i];
    }
    console.log(sum);
}

//Prints the max element in the array
function max(array){
    var max = array[0];
    array.forEach(function(arr){
        if (arr[i] > max){
            max = arr[i];
        }
    });
    console.log(m);
}