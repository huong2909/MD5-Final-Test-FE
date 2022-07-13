import { Component, OnInit } from '@angular/core';
import {TourService} from "../../service/tour.service";
import {Tour} from "../../model/tour";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
  listTour: Tour[] = [];
  constructor(private tourService: TourService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.tourService.getAll().subscribe(result => {
      this.listTour = result;
      console.log(result);
    }, error => {
      console.log(error);
    });
  }
  delete(id: any) {
    this.tourService.delete(id).subscribe(() => {
      this.getAll();
      alert('Xoá thành công');
    }, e => {
      console.log(e);
    });
  }
}
