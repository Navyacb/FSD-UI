
import {Employee} from "./employee";

class RegularEmployee extends Employee{

    salary:number;

    constructor(sal:number,name:string,id:number,deptName:string,design:Enumerator) {
        super(name,id,deptName,design);
        this.salary = sal;
    }
    createEmployee(employeeID,employeeName,departmentName,designation){
        this.employeeID = employeeID;
        this.employeeName = employeeName;
        this.departmentName = departmentName;
        this.designation = designation
    }
    displayEmployeeDeatails(){
        console.log(`Emp ID is :${this.employeeID},
                     Emp name is : ${this.employeeName},
                     dept name is : ${this.departmentName},
                     designation is : ${this.designation},
                     salray is : ${this.salary} `)
    }
    get_salary(){
        return this.salary;
    }
    set_salary(sal:number){
        this.salary = sal
    }

}