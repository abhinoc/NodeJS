var printRandom = function() {
  console.log("Just a random stuff!");  
};
printRandom()

function placeAnOrder(orderNumber) {
    
    console.log("Customer order:", orderNumber);
    
    if (orderNumber === 1) {
        console.log("ONE:", orderNumber);
        }
    
    if (orderNumber === 2) {
        console.log("TWO:", orderNumber);
    }
    

    if (orderNumber === 3) {
        console.log("THREE:", orderNumber);
        }
    
    if (orderNumber === 4) {
        console.log("FOUR:", orderNumber);
    }
    
    if (orderNumber === 5) {
        console.log("FIVE:", orderNumber);
        }
    
    if (orderNumber === 6) {
        console.log("SIX:", orderNumber);
        setInterval(printRandom, 1500);
        
    }
    
    
    cookAndDeliverFood(function () {
        console.log("Delivered food Order:", orderNumber);
    
    })
}

function cookAndDeliverFood(callback){

    setTimeout(callback, 5000);
    
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);