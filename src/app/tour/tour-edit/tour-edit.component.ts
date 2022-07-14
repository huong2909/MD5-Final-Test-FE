import {Component, OnInit} from '@angular/core';

import {TourService} from "../../service/tour.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {
  tourForm!: FormGroup;

  constructor(private tourService: TourService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.tourForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = Number(paramMap.get('id'));
      this.getTour(id);
    });
  }

  getTour(id: number) {
    return this.tourService.getById(id).subscribe(tour => {
      this.tourForm.patchValue(tour);
    });
  }

  update() {
    this.tourService.update(this.tourForm.get('id')?.value, this.tourForm.value).subscribe(() => {
      this.router.navigate(['/tour']);
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }
}
