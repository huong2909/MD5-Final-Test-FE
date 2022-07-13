import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TourService} from "../../service/tour.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.css']
})
export class TourCreateComponent implements OnInit {
  tourForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(private tourService: TourService,
              private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    const tour = this.tourForm.value;
    this.tourService.save(tour).subscribe(() => {
      this.router.navigate(['/tour']);
      alert('Thành công');
    }, error => {
      alert('Lỗi');
    }) ;
  }
}
