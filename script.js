'use strict';

const  Car =
{
    calcAge(){
        console.log(2037 - this.speed);
    }
    ,
    init(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    

}
class a{
    init(test){
        this.test = test;
        return;
    }
}
const arrow = (a,b,c) =>{
    return(a+b+c/3);
}
console.log(arrow(2,3,1));
const b = new a();
console.log(b); 