import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course-service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    courses : string | undefined | null ;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {
    }

    ngOnInit(): void{

        this.courses = this.activatedRoute.snapshot.paramMap.get('id');

    }

}