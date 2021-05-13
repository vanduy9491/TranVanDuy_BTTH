class Employee{
    name;
    age;
    address;
    salary;
    totalWorkingHours;
    constructor(name,age,address,salary){
        this.name = name;
        this.age = age;
        this.address = address;
        this.salary = salary;
    }
    inputWokingHours(){
        this.totalWorkingHours = +prompt("Hãy nhập số giờ làm việc")
    } 
    printInfo(){
        document.write(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}, Số giờ làm việc:${this.totalWorkingHours} `);  
    }
    calculatorBonus(){
        let bonus = 0;
        let hours = this.totalWorkingHours;
        if (hours >= 200){
            bonus = this.salary * 0.2;
        }
        else {
            if (hours >= 100){
                bonus = this.salary * 0.1
            }
        }
        document.write(`Tiền thưởng là :${bonus} <br>`)
    }
}


let duy = new Employee("duy",30,"45 Trần Nguyên Đán",5000000);
let buu = new Employee("buu",20,"10 Trần Trọng Bình", 4500000);
let nam = new Employee("nam",25,"45 Lê Nguyên Đán", 3000000);

duy.inputWokingHours();
duy.printInfo();
duy.calculatorBonus();
buu.inputWokingHours();
buu.printInfo();
buu.calculatorBonus();
nam.inputWokingHours();
nam.printInfo();
nam.calculatorBonus();





