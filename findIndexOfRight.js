function findIndexOfRight(inputString , startPos){
    var start = startPos;
    var findSuccess = false;
    while(1){
    	var indexOfLeft = inputString.indexOf('\}' , start);
    	if(indexOfLeft == -1){
    		return -1;
    	}
    	if(inputString[indexOfLeft - 1] !== '\\'){
    		return indexOfLeft;
    	}
    	start = indexOfLeft + 1;
    }
}