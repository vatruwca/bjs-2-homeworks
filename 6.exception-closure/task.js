function parseCount(arg) {

	const parsed = Number.parseInt(arg, 10);
	if (isNaN(parsed)) {
		throw new Error("Невалидное значение"); 	    
	}
	return parsed;
}

function validateCount(a) {
	try{
		const pars = parseCount(a);
		return pars;
	}	catch(error){
		return error;
	}	
}

class Triangle{
	constructor(a, b, c){
		this.a = a;
		this.b = b;
		this.c = c;	

	if ((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.b + this.c < this.a)) {
		throw new Error("Треугольник с такими сторонами не существует");
		}
	}	

	getPerimeter() {	
	    const P = this.a + this.b + this.c;	
		return P;
	}

	getArea() {
		const p = (this.a + this.b + this.c) / 2;
		const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(s.toFixed(3));
	}
}


function getTriangle(a, b, c) {
	try{
	return new Triangle (a, b, c);
	} catch(error) {
		const obj = {};
		obj.getArea = obj.getPerimeter = () => "Ошибка! Треугольник не существует";
	return obj;
	}
}