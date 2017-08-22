function findIndexOfLeft(inputString , startPos){
    var start = startPos;
    var findSuccess = false;
    while(1){
    	var indexOfLeft = inputString.indexOf('\{' , start);
    	// console.log("+++++:" , inputString.substring(start , start +20));
    	// console.log("-----:" , indexOfLeft);
    	if(indexOfLeft === -1){
    		return -1;
    	}
    	if(inputString[indexOfLeft - 1] !== '\\'){
    		return indexOfLeft;
    	}
    	start = indexOfLeft + 1;
    }
}