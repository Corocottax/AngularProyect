import { IChampion } from './../../models/GeneralModels';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-calle',
  templateUrl: './calle.component.html',
  styleUrls: ['./calle.component.scss']
})

export class CalleComponent implements OnInit {

  public UrlChampions!: any[];

  constructor(private activatedRoute: ActivatedRoute, private calleService: ServicesService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {

      const calle = params.get("calle");

        this.calleService.getChampions(calle).subscribe((data: any) => {

          const apiResults: IChampion[] = data;

          const championsResults = [];

          for (const apiResult of apiResults) {

            if (apiResult.calles[0].calle === calle) {

              championsResults.push(apiResult);
              
            }

          }

          this.UrlChampions = championsResults;
                
      })

    })

  }

}
