import { Component, OnInit } from '@angular/core';
import { NewsappService } from 'src/app/services/newsapp.service';

@Component({
  selector: 'app-techheadings',
  templateUrl: './techheadings.component.html',
  styleUrls: ['./techheadings.component.css']
})
export class TechheadingsComponent implements OnInit {

  constructor(private _service: NewsappService) { }

  techHeading : any = [];
  ngOnInit(): void {
    this._service.topTechNews("technology").subscribe((res) =>{
      this.techHeading = res.articles;
    });
  }

}
