import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TourService} from "../../service/tour.service";
import {Tour} from "../../model/tour";

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {
  id: any;
  tour: Tour = {};
  constructor(private tourService: TourService,
              private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.getById();
  }
  getById(){
    this.tourService.getById(this.id).subscribe(result => {
      this.tour = result;
      console.log(result);
    }, error => {
      console.log(error);
    });
  }
}
