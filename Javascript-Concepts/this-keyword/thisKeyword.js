// var myVar = 100;

// function WhoIsThis() {
//     var myVar = 200;

//     console.log("myVar = " + myVar);
//     console.log("this.myVar = " + this.myVar);
// };

// WhoIsThis();

var myVar1 = 101;
function SomeFunction(){
    function Who(){
        var myVar1 = 102;
        // console.log("myVar1:",myVar1)
        // 102
        // console.log("this.myVar1:",this.myVar1)
        // 101
    }
    // Who();
}
// SomeFunction()

// try this code on google console or html file using <script> tag in it

var myVar3 = 300

function Who3(){
    this.myVar3 = 400

}
var obj1 = new Who3();

var obj2 = new Who3()
obj2.myVar3 = 401
// console.log(obj1.myVar3)
// console.log(obj2.myVar3)



var myVar4 = 500
var obj4 = {
    myVar4:501,
    Who4:function(){
        var myVar4 = 502
        // console.log(myVar4)
        // console.log(this.myVar4)
    }
}
obj4.Who4()

function WhoIsThis() {
    console.log('Hi');
}

// WhoIsThis();
// WhoIsThis.call();
// WhoIsThis.apply();


// var myVar = 100;

// function WhoIsThis() {

//     alert(this.myVar);
// }

// var obj1 = { myVar : 200 , whoIsThis: WhoIsThis };

// var obj2 = { myVar : 300 , whoIsThis: WhoIsThis };

// WhoIsThis(); // 'this' will point to window object

// WhoIsThis.call(obj1); // 'this' will point to obj1

// WhoIsThis.apply(obj2); // 'this' will point to obj2

// obj1.whoIsThis.call(window); // 'this' will point to window object

// WhoIsThis.apply(obj2); 

console.log("----S")
var myVar = 100;
    
function SomeFunction(callback)
{
    var myVar = 200;

    callback();
};
      
var obj = {
            myVar: 300,
            WhoIsThis : function() {
                alert("'this' points to " + this + ", myVar = " + this.myVar);
            }
      };
      
SomeFunction(obj.WhoIsThis); 
SomeFunction(obj.WhoIsThis.bind(obj)); 