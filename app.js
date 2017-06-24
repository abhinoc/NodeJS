var Abhi = {
    printFirstName:function(){
        console.log("Abhi here");
        console.log(this === Abhi);
    }
};

Abhi.printFirstName();


// The default calling context is global
function doSomething(){
        console.log("\nTesting ....");
        console.log(this === global);
}

doSomething();