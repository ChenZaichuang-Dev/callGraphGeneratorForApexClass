function findClasses(inputString){
    var regularExpress = /\ +class\ +(\w+)\ +{/;
	var matchResult = inputString.match(regularExpress);
	console.log(matchResult);
}
// module.exports.findClasses = findClasses;