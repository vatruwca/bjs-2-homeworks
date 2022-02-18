function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if ( this.marks === undefined) {
    this.marks = [mark]; 
  } else {
    this.marks.push(mark); 
  }
}

Student.prototype.addMarks = function(...mark) {
  if ( this.marks === undefined) {
    this.marks = [...mark]; 
  } else {
    this.marks.push(...mark);
  }  
}

Student.prototype.getAverage = function(marks) {
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length; 
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
  }

let student3 = new Student("Oleg", "male", 23);
student3.setSubject("Physics");
student3.addMark(4);
student3.addMark(3);
student3.addMark(4);
student3.addMark(4);
console.log(student3.getAverage()); 
console.log(student3);

let student4 = new Student("Anna", "female", 21);
student4.setSubject("Algebra");
student4.addMark(5);
student4.addMark(5);
student4.addMark(4);
student4.addMark(4);
console.log(student4.getAverage()); 
console.log(student4);