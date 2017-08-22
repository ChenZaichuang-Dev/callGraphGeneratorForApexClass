function findEndOfFunction(inputString , startPos){
	var start = startPos;
	// var end = inputString.indexOf('\n' , start);
	var haveNotFindEnd = true;
	var numOfLeft = 0;
	var numOfRight = 0;

	var indexOfLeft = findIndexOfLeft(inputString , start) + 1;
	var indexOfRight = findIndexOfRight(inputString , start) + 1;
	var noMoreLeft = false;
	// //.log(inputString.substring(startPos , startPos + 20));
	//.log("indexOfLeft = " , indexOfLeft);
	//.log("indexOfRight = " , indexOfRight);
	var times = 0;
	if(indexOfLeft === 0 || indexOfLeft > indexOfRight){
		return inputString.substring(start , indexOfRight);
	}
	numOfLeft++;
	//.log("numOfLeft = " , numOfLeft);
	numOfRight++;
	//.log("numOfRight = " , numOfRight);
	while(1){
		while(indexOfRight > indexOfLeft){
			//.log("good1");
			indexOfLeft = findIndexOfLeft(inputString , indexOfLeft) + 1;
			if(indexOfLeft > 0){
				numOfLeft++;
			}else{
				break;
			} 
			//.log("indexOfLeft = ",indexOfLeft);
			//.log("numOfLeft = " , numOfLeft);
			times++;
			if(times === 30){
				//.log("Failed");
				return '';
			}
		}
		if(indexOfLeft === 0){
			while(indexOfRight > 0){
				//.log("good2");
				indexOfRight = inputString.indexOf('}' , indexOfRight) + 1;
				//.log("indexOfRight = ",indexOfRight);
				numOfRight++;
				//.log("numOfRight = " , numOfRight);
				if(numOfRight  === numOfLeft + 1){
					return inputString.substring(startPos , indexOfRight - 1);
				}
			}
		}else{
			while(indexOfLeft > indexOfRight){
				//.log("good3");
				indexOfRight = inputString.indexOf('}' , indexOfRight) + 1;
				//.log("indexOfRight = ",indexOfRight);
				numOfRight++;
				//.log("numOfRight = " , numOfRight);
				//.log("indexOfLeft > indexOfRight=",indexOfLeft > indexOfRight);
				if(indexOfLeft > indexOfRight && numOfRight  === numOfLeft){
					return inputString.substring(startPos , indexOfRight - 1);
				}
				times++;
				if(times === 30){
					//.log("Failed");
					return '';
				}
			}
		}
		
		times++;
		if(times === 30){
			//.log("Failed");
			return '';
		}
		
	}

}