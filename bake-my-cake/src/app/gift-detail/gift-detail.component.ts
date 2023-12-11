import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gift } from 'src/app/models/desserts';
import { GiftsService } from 'src/app/services/gifts.service';


@Component({
  selector: 'app-gift-detail',
  templateUrl: './gift-detail.component.html',
  styleUrls: ['./gift-detail.component.css']
})
export class GiftDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private giftsService: GiftsService) { }

  gift: Gift = { name: '', price: '', description: '' };
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.giftsService.getGift(+id).subscribe(data => {
        this.gift = data;
      })
    })
  }
}
