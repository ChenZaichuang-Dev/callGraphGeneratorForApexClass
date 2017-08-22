class funcItem{
    constructor(name , funcContent) {
    	this.name = name;
        this.farther = [];
        this.child = [];
        this.funcContent = funcContent;
    }
    addFarther(farther){
    	this.farther.push(farther);
    }
    addChild(child){
    	this.child.push(child);
    }
 }