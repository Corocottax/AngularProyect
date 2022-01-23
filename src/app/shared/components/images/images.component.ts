import { Image } from './../../models/Shared';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  @Input() public image!: Image;

  constructor() { }

  ngOnInit(): void {
  }

}
