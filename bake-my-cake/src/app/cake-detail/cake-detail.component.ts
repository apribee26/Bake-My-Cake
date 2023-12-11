import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cake } from '../models/cakes';
import { CakesService } from '../services/cakes.service';

@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css']
})
export class CakeDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private cakesService: CakesService) { }
  cake: Cake = { name: '', price: '', description: '' };
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.cakesService.getCake(+id).subscribe(data => {
        this.cake = data;
      })
    });
  }
}
