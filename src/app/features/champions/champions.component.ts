import { IChampion } from './../models/GeneralModels';
import { ServicesService } from './../champions/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {

  public championsList: IChampion[] = []

  constructor(private requestService: ServicesService) { 

    

  }

  ngOnInit(): void {

    this.requestService.getChampions().subscribe((data: any) => {

      const apiResults: IChampion[] = data;      

      const championsResults = apiResults.map(({ name, url, calles, runas }) => ({

        name, url, calles, runas

      }));

      this.championsList = championsResults;

    })

  }

}
