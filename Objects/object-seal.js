/**
 * Syntax:

Object.seal(obj)
Parameters Used:

obj : It is the object which has to be sealed.
Return Value:
Object.sealed() returns the object that was passed to the function.
 */

 const obj1 = {property1:'Initial_data'};
 const obj2 = Object.seal(obj1);

 obj2.property1 = 'new_data';
 console.log(obj2.property1);

 // Another programm

 let obj = {prop:function(){},name:'adam'};
 console.log(obj);

 obj.name = 'billy';
 delete obj.prop;

 console.log(obj);

 let o = Object.seal(obj);

 delete obj.prop;

 console.log(obj);

 obj.name = 'chris';

 console.log(obj);
