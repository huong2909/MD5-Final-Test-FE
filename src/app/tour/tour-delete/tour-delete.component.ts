import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TourService} from "../../service/tour.service";

class StudentService {
}

@Component({
  selector: 'app-tour-delete',
  templateUrl: './tour-delete.component.html',
  styleUrls: ['./tour-delete.component.css']
})
export class TourDeleteComponent implements OnInit {
  tourForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  id: any;
  constructor(private tourService: TourService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getTour(this.id);
    });
  }

  ngOnInit() {
  }
  getTour(id: number) {
    return this.tourService.getById(id).subscribe(tour => {
      this.tourForm = new FormGroup({
        title: new FormControl(tour.title),
        price: new FormControl(tour.price),
        description: new FormControl(tour.description),
      });
    });
  }
  delete(id: any) {
    this.tourService.delete(id).subscribe(() => {
      this.router.navigate(['/tour']);
      alert('Xoá thành công');
    }, e => {
      console.log(e);
    });
  }

}
