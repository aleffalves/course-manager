import { LocationStrategy } from "@angular/common";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})
export class CourseService{

    retrieveAll(): Course[] {
        return COURSES;
    }

    retrieveById(id : any): Course{

        return this.retrieveById((courseIterator : Course) => courseIterator.id === id);
    }
}

var COURSES: Course[] = [{
    id:  1,
    name: 'Angular',
    imageUrl: '/assets/images/forms.png',
    price: 99.99,
    code: 'XFS359',
    duration: 120,
    rating: 4.5,
    releaseDate: 'December, 4, 2019',
    description: ""
},
{
    id: 2,
    name: 'VangularTester',
    imageUrl: '/assets/images/http.png',
    price: 89.99,
    code: 'XLS369',
    duration: 80,
    rating: 3.6,
    releaseDate: 'December, 25,2020',
    description: ''
},
{
    id: 3,
    name: 'JS',
    imageUrl: '/assets/images/animations.png',
    price: 34.99,
    code: 'Xsw329',
    duration: 120,
    rating: 4.5,
    releaseDate: 'December, 4, 2019',
    description: ""
},
{
    id: 4,
    name: 'Front End',
    imageUrl: '/assets/images/router.png',
    price: 26.99,
    code: 'asdc98',
    duration: 80,
    rating: 3.6,
    releaseDate: 'December, 25,2020',
    description: ''
}
]