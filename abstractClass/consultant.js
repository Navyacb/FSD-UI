"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var employee_1 = require("./employee");
var RegularEmployee = /** @class */ (function (_super) {
    __extends(RegularEmployee, _super);
    function RegularEmployee(hourly_amt, specification, name, id, deptName, design) {
        var _this = _super.call(this, name, id, deptName, design) || this;
        _this.hourly_amt = hourly_amt;
        _this.specification = specification;
        return _this;
    }
    RegularEmployee.prototype.createEmployee = function (employeeID, employeeName, departmentName, designation) {
        this.employeeID = employeeID;
        this.employeeName = employeeName;
        this.departmentName = departmentName;
        this.designation = designation;
    };
    RegularEmployee.prototype.displayEmployeeDeatails = function () {
        console.log("Emp ID is :" + this.employeeID + ",\n                     Emp name is : " + this.employeeName + ",\n                     dept name is : " + this.departmentName + ",\n                     designation is : " + this.designation + ",\n                     hourly amt  is : " + this.hourly_amt + " ");
    };
    return RegularEmployee;
}(employee_1.Employee));
