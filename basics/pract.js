// practicing the classes and objects 
// 1) creating a wwebsite for the collage create a class user with 2 properties name and email it also has a method called view data() that allow user to view websitedata
let Data = "special Information"
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data", Data);
    }
}
class admin extends user{
    constructor(name, email){
        super(name, email);

    }
}
let student1 = new user("Devesh", "pathakdevesh2003@gmail.com");
let student2 = new user("Priya", "abc@email.com");

console.log(student1);
console.log(student2);
student1.viewData();
student2.viewData();
let teacher1 = new user("Sudha", "abc@email.com");
let admin1 = new admin("Admin", "admin@email.com");
admin1.viewData();

