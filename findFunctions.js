function findFunctions(inputString){
    var regularExpress = /\s((public)|(private)|(webservice)|(global))\ +((?!class\ )[^\(\)\ \{\}]+\ +)*(\w+)\ *\([^\(\)]*\)\s*\{/gi;
    // var regularExpress = /(.*)\n/g;
	var matchResult = inputString.match(regularExpress);


	// console.log(matchResult);
	var regularExpress2 = /\s((public)|(private)|(webservice)|(global))\ ((?!class\ )[^\(\)]+\ )*(\w+)\ *\([^\(\)]*\)\ *\s*\{/i;
	var funcItemManager = [];
	matchResult.forEach(function(item){
		var funcContent = findEndOfFunction(inputString , inputString.indexOf(item) + item.length);
		var funNameMatchResult = item.match(regularExpress2);
		// console.log(funNameMatchResult);
		// console.log(funNameMatchResult[7]);
		var funObj = new funcItem(funNameMatchResult[7] , funcContent);
		funcItemManager.push(funObj);
		// console.log(funcContent);

		// var temp = inputString.substring(inputString.indexOf(item) + item.length , inputString.indexOf(item) + item.length + 30);
		// console.log(temp);
		// console.log("item=" , item);
		// console.log("item.length = " , item.length);
	});
	
	funcItemManager.forEach(function(item){
		funcItemManager.forEach(function(funcObj){
			if(validateCallFunc(item.funcContent , funcObj.name)){
				item.addChild(funcObj);
				funcObj.addFarther(item);
			}
		});
	});
	console.log("@@@@@:" , funcItemManager);


	// console.log("!!!!!:" , funcItemManager[0]);
	// showFuncObj(funcItemManager[0] , 0);

	// funcItemManager.forEach(function(item){
	// 	showFuncObj(item , 0);
	// 	console.log('\n\n\n\n');
	// });
	// showFuncObj(funcItemManager[0] , 0);
	// showFuncObj(funcItemManager[0] , 1);
	// showFuncObj(funcItemManager[0] , 2);
	// showFuncObj(funcItemManager[0] , 3);
	// showFuncObj(funcItemManager[0] , 4);
	// showFuncObj(funcItemManager[0] , 5);
	funcItemManager.forEach(function(item){
		if(item.farther.length === 0){
			showFuncObj(item , 0);
			console.log('\n\n\n\n');
		}
	});


	// funcItemManager.forEach(function(funcObj){
	// 	console.log("" + funcObj.name + ":")
	// 	funcObj.child.forEach(function(child){
	// 		item.addChild(funcObj);
			
	// 	});
	// 	if(validateCallFunc(item.funcContent , funcObj.name)){
	// 		item.addChild(funcObj);
	// 	}
	// });

	// var regularExpress3 = /\s((public)|(private))\ (.+\ )*(\w+)\ *\(.*\)\ *\s*\{\n([^\{]*\{[^\}]*\})*\s*\}/g;
	// var matchResult3 = inputString.match(regularExpress3);
	// console.log(matchResult3);
}
function showFuncObj(funcObj , initNum){
	var i = initNum;
	var preString = '';
	var initNumTemp = initNum;
	while(i--){
		preString = preString + '---';
		// console.log("\t");
	}
	initNum++;
	console.log('' + preString + funcObj.name + ":\n");
	funcObj.child.forEach(function(item){
		showFuncObj(item , initNum)
	});
}