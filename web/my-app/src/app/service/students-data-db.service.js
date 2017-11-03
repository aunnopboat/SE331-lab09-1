"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var Observable_1 = require("rxjs/Observable");
var StudentsDataDBService = (function () {
    function StudentsDataDBService() {
        this.students = [
            {
                "id": 1,
                "studentId": "SE-001",
                "name": "Prayuth",
                "surname": "The minister",
                "gpa": 3.59,
                "image": "images/tu.jpg",
                "featured": false,
                "penAmount": 15,
                "description": "The great man ever!!!!"
            },
            {
                "id": 2,
                "studentId": "SE-002",
                "name": "Jurgen",
                "surname": "Kloop",
                "gpa": 2.15,
                "image": "images/Kloop.gif",
                "featured": true,
                "penAmount": 2,
                "description": "The man for the Kop"
            },
            {
                "id": 3,
                "studentId": "SE-003",
                "name": "Mitsuha",
                "surname": "Miyamizu",
                "gpa": 2.15,
                "image": "images/mitsuha.gif",
                "featured": true,
                "penAmount": 0,
                "description": "The most beloved one"
            }
        ];
    }
    StudentsDataDBService.prototype.getStudentsData = function () {
        var _this = this;
        return Observable_1.Observable.create(function (subscriber) { return subscriber.next(_this.students); });
    };
    StudentsDataDBService.prototype.getStudent = function (id) {
        var student = this.students.find(function (student) { return student.id === +id; });
        return Observable_1.Observable.create(function (subscriber) { return subscriber.next(student); });
    };
    StudentsDataDBService.prototype.addStudent = function (student) {
        console.log(student);
        student.id = this.students.length + 1;
        this.students.push(student);
        console.log(this.students);
    };
    return StudentsDataDBService;
}());
StudentsDataDBService = __decorate([
    core_1.Injectable()
], StudentsDataDBService);
exports.StudentsDataDBService = StudentsDataDBService;
//# sourceMappingURL=students-data-db.service.js.map