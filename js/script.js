
var doCoolStuff = function () {
    var currentClassName = document.getElementById('cool').className;
    //changes class name 
    if(currentClassName =='cool'){
        document.getElementById('cool').className = 'cool red';
    }
    else{
        document.getElementById('cool').className = 'cool';
    }
}


var sayMyName = function (name) {
    alert('My name is: ' + name);
}

var car = { //this is an object or dictionary in python
    make: 'VW',
    type: 'Polo',
    color: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: ['seat 1', 'seat 2', 'seat 3', 'seat 4'],
    turnOn: function () {
        this.isTurnedOn = true;
        //this refers to the car object so car.isTurnOn
    },
    fly: function () {
        alert('fly')
        //calling a function without parenthesis is just referencing it
        //calling it with parenthesis is executing the function
    },
    switchCar: function (isOn) {
        console.log('turn car ' + isOn)
        if (isOn == true) {
            this.isTurnedOn = true;
        }
        else {
            this.isTurnedOn = false;
        }
    }
};
console.log('hello there friends')