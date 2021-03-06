import {Component} from 'angular2/core'
import {CourseService} from './courses.service'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <ul>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>
        `,
    providers : [CourseService]
})

export class CoursesComponent {
    title = "WTF??";
    courses;

    constructor (courseService : CourseService){
        this.courses = courseService.getCourses();
    }
}