function validateCallFunc(inputString , funcName){
	var index = inputString.indexOf(funcName);
	//.log("funcName = " , funcName);
	if(index === -1){
		//.log("here1");
		return false;
	}
	var stringBeforeFuncName = inputString.substring(index - 1 , index) + inputString.substring(index + funcName.length , index + funcName.length + 2);
	//.log("stringBeforeFuncName = " , stringBeforeFuncName);
	var regularExpress = /\W\ *\(/;
	if(stringBeforeFuncName.match(regularExpress) !== null){
		//.log("here2");
		return true;
	}else{
		//.log("here3");
		return false;
	}
	
	// return (stringBeforeFuncName.match(regularExpress) === null);
}



