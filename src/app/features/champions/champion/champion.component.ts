import { IChampion, ICalles } from './../../models/GeneralModels';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})
export class ChampionComponent implements OnInit {

  public champion!: IChampion;
  public calle!: ICalles;

  constructor(private activatedRoute: ActivatedRoute, private championService: ServicesService) { 

  

  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {

      const name = params.get("name");

      this.championService.getChampion(name).subscribe((data: any) => {

        const apiResult: IChampion = data[0];

        this.champion = apiResult;

        const arrayCalles = this.champion.calles.map(({ calle, url }) => ({

          calle, url
  
        }));        

        this.calle = arrayCalles[0];
        
      })

    })

  }

}
