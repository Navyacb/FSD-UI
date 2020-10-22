import {Employee} from "./employee";

class RegularEmployee extends Employee{

    hourly_amt:number;
    specification:Enumerator;

    constructor(hourly_amt:number,specification:Enumerator ,name:string,id:number,deptName:string,design:Enumerator) {
        super(name,id,deptName,design);
        this.hourly_amt = hourly_amt;
        this.specification = specification;
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
                     hourly amt  is : ${this.hourly_amt} `)
    }

}