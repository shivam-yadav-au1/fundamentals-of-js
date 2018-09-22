function Automobile(color){
    this.color = color;
}
var vehiclel = new Automobile("red");
console.log(vehiclel);

/**
 * Object.create(prototype[, propertiesObject])
 * 
 * 
 * Parameters Used:

prototype : It is the prototype object from which a new object has to be created.

propertiesObject : It is optional parameter. It specifies the enumerable properties to be added to the newly created object.
 */
function fruits(){
    this.name = 'fruit 1';
    this.season = 'summer';
}

function apple(){
    fruits.call(this);
}
apple.prototype = Object.create(fruits.prototype);
const app = new apple();
console.log(app.name);
console.log(app.season);