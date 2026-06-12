class Student{
    constructor(name, age, grade){
        this._name = name;
        this._age = age;
        this._grade = grade;
    }

    introduce(){
        console.log(`Hi, I'm ${this._name}, I'm ${this._age} years old and my grade is ${this._grade}`);
    }

    set name(name){
        this._name = name;
    }
    get getName(){
        return this._name;
    }

    set Age(age){
        this._age = age;
    }
    get getAge(){
        return this._age;
    }

    set setGrade(grade){
        this._grade = grade;
    }
    get getGrade(){
        return this._grade;
    }
}

class Teacher extends Student{
    constructor(name, age, grade, subject){
        super(name, age, grade);
        this._subject = subject;
    }

    introduce(){
        super.introduce();
        console.log(`Hi, I'm ${this._name}, I'm ${this._age} years old, I teach ${this._subject} and my grade is ${this._grade}`);
    }
}


let student1 = new Student("Budi", 20, "A");
student1.introduce(); // Output: Hi, I'm Budi, I'm 20 years old and my grade is A

let student2 = new Student("Siti", 22);
student2.introduce(); // Output: Hi, I'm Siti, I'm 22 years old and my grade is B

let student3 = new Student();
student3.introduce(); // Output: Hi, I'm undefined, I'm undefined years old and my grade is undefined
student3.name = "Joko";
student3.Age = 25;
student3.setGrade = "C";
student3.introduce(); // Output: Hi, I'm Joko, I'm 25 years old and my grade is C

console.log(student3.getName); // Output: Budi

let teacher1 = new Teacher("Pak Ahmad", 40, "A", "Mathematics");
teacher1.introduce(); // Output: Hi, I'm Pak Ahmad, I'm 40 years old, I teach Mathematics and my grade is A