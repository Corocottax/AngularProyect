import { ICalles } from './../models/GeneralModels';
import { ServicesService } from './services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calles',
  templateUrl: './calles.component.html',
  styleUrls: ['./calles.component.scss']
})
export class CallesComponent implements OnInit {

  public callesList: ICalles[] = []

  constructor(private requestService: ServicesService) { 

    

  }

  ngOnInit(): void {

    this.requestService.getCalles().subscribe((data: any) => {

      const apiResults: ICalles[] = data;      

      const callesResults = apiResults.map(({ calle, url }) => ({

        calle, url

      }));      

      this.callesList = callesResults;

    })

  }

}
