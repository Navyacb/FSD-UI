export abstract class Employee
{
    protected employeeID: any;
    protected employeeName: string;
    protected departmentName: string;
    protected designation: Enumerator;
    
    constructor(name: string, id: any, deptName:string, design:Enumerator) {
        this.employeeName = name;
        this.employeeID = id;
        this.departmentName = deptName;
        this.designation = design;
    }
    abstract createEmployee(employeeID,employeeName,departmentName,designation);
    abstract displayEmployeeDeatails();
}