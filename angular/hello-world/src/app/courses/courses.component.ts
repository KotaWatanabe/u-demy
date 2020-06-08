import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses;
  isActive = true;
  email = 'me@example.com'
  title: string
  onDivClicked($event) {
    console.log('div was clicked', $event);
  }
  onSave($event) {
    $event.stopPropagation();

    console.log('save!', $event);
  }

  onKeyUp() {
    console.log(this.email);
  } 
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  course = {
    title: "Angular Course",
    rating:4.9745,
    students: 30123,
    price:190.95,
    releaseDate: new Date(2016,3,1)
  }

  text = `baby pop-up offal pitchfork forage. Hammock chillwave vice, kogi pop-up hella distillery tacos fanny pack.`
  
  ngOnInit(): void {
    
  }

}
