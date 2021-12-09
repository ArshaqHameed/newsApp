import { Component, OnInit } from '@angular/core';
import { NewsappService } from 'src/app/services/newsapp.service';

@Component({
  selector: 'app-topheadings',
  templateUrl: './topheadings.component.html',
  styleUrls: ['./topheadings.component.css']
})
export class TopheadingsComponent implements OnInit {

  constructor(private _service: NewsappService) { }

  topHeadings : any = [];
  ngOnInit(): void {
    this._service.topHeading().subscribe((res) => {
      this.topHeadings = res.articles;
    })
  }

}
