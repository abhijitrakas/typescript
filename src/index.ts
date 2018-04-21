class Student {
	fullName: string;
	constructor(public firstName, public lastName, public company ) {
		this.fullName = firstName + " " + lastName + " " + company + ".";
	}
}

interface Person {
	firstName: string;
	lastName: string;
	company: string;
}

function greeter( person: Person ) {
	return "Hello, I am " + person.firstName + " " + person.lastName + " From " + person.company + ".";
}

var user = new Student("Abhijit", "Rakas", "rtCamp");

document.body.innerHTML = greeter(user);
