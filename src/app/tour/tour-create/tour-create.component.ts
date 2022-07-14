import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {TourService} from "../../service/tour.service";
import {Router} from "@angular/router";
import {Tour} from "../../model/tour";

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.css']
})
export class TourCreateComponent implements OnInit {
  tourForm!: FormGroup;

  constructor(private tourService: TourService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.tourForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['']
    })
  }

  submit() {
    this.tourService.save(this.tourForm.value).subscribe((tour: Tour) => {
      this.tourForm.reset();
      if (tour) {
        alert('Thành công');
      } else {
        // TODO
      }
    }, error => {
      alert('Lỗi');
    });
  }

  goBack() {
    this.router.navigate(['/tour']);
  }
}
