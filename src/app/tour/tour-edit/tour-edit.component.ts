import { Component, OnInit } from '@angular/core';

import {TourService} from "../../service/tour.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {
  id: any;
  tourForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  constructor(private tourService: TourService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getTour(this.id);
    });
  }

  ngOnInit(): void {
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
  update(id: number) {
    const tour = this.tourForm.value;
    this.tourService.update(id, tour).subscribe(() => {
      this.router.navigate(['/tour']);
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }
}
