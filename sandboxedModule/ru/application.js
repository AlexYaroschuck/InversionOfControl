// Файл содержит маленький кусочек основного модуля демонстрационного
// прикладного приложения, загружаемого в песочницу демонстрационным
// кусочком фреймворка. Читайте README.md в нем задания.

// Вывод из глобального контекста модуля
console.log('From application global context');
var util = require("util");

var car = function (model){
	this.model = model;	
} 

car.prototype.drive = function(){
	console.log(util.format("%s is driving",this.model));
}


var gazel = function(model){
	this.model = model;
}


util.inherits(gazel,car);

gazel.prototype.brake = function(){
	//console.log(this.model + " braking");
	console.log(util.format("%s braking",this.model));
}

var Gazeeeel = new gazel("123");
Gazeeeel.drive();
Gazeeeel.brake();

var A = {
	a: {
		a:{
			
			a:{
				a:{
					a:{
						a:2
					}
				}
			}
		}
	}
};
A.self = A;
	

console.log(util.inspect(A, { showHidden: true, depth: 10 }));

module.exports = function() {
  // Вывод из контекста экспортируемой функции
  console.log('From application exported function');
};
