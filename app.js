function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life +=1;
        console.log(this.name + "gave 1 life to" + targetPlayer.name);      
    } 
}

var Abhi = new User();
var test = new User();

Abhi.name = "Abhi";
test.name = "test";

Abhi.giveLife(test);

console.log("Abhi:" + Abhi.life);
console.log("test:" + test.life);


// You can add functions to all objects.
User.prototype.uppertcut = function uppercut(targetPlayer){
        targetPlayer.life -= 5;
        console.log(this.name + " Just uppercut to " + targetPlayer.name);   
};

test.uppertcut(Abhi);

console.log("Abhi:" + Abhi.life);
console.log("test:" + test.life);

// You can add properties to all objects.
User.prototype.magic = 60;
console.log(Abhi.magic);
console.log(test.magic);
