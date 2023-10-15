// class Student {
//     name
//     age
//     standard
//     marks
// }
// let student1= new Student('RAJ','15','12',80)
// console.log(student1)

function Student(name){
    this.name=name
    console.log(this)
}
Student.prototype.printName=function(){
    console.log(this.name)
}
let student1=new Student('raj')
student1.printName()

// method 2 using a constructor 
class Car{
constructor(model,color){
    this.model=model
    this.color=color
}
getDetails(){
    console.log(this.model)
    console.log(this.color)
}

}
const car1=new Car('Audi','red')
car1.getDetails()
console.log(car1.color)
console.log(car1)
console.log(Array.prototype)

//inheritance
class User{
    constructor(name,lastname,password){
        this.name=name
        this.lastname=lastname
        this.password=password
    }
    getEmployeeDetails(){
        console.log(this.name,"  ",this.lastname)
    }
}
class Admin extends User{
    constructor(name,lastname,password,permissions){
        super(name,lastname,password)
        this.permissions=permissions
    }
    getPermissions(){
        console.log(this.permissions)
    }
}
const user1=new Admin('sejal','gujar','12345','read , write')
console.log(user1)
user1.getEmployeeDetails()
user1.getPermissions()

//bind : function borrowing
const user ={
    firstname:'sejal',
    lastname:'gujar',
    getName :function(){
        return this.firstname + " " + this.lastname
    }
}
const admin ={
    firstname:'riya',
    lastname:'shah',
}
let fullnameofadmin = user.getName.bind(admin)
console.log(fullnameofadmin())

//call
const usercall ={
    firstname:'sejal',
    lastname:'gujar',
    getName :function(){
        return this.firstname + " " + this.lastname
    }
}
const admin1 ={
    firstname:'riya-call',
    lastname:'shah',
}
let fullnameofadmin1_call = usercall.getName.call(admin1)

console.log(fullnameofadmin1_call)



//call vs bind vs apply

//call
const getdetails ={
    fullnames:function(fname,lname){
        return this.fname + "" + this.lname
    }
}
const userdetails={
    fname:'xyz',
    lname:'abx'
}
console.log(getdetails.fullnames.call(userdetails,'newfname','lsname'))
