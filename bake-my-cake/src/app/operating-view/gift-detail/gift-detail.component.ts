import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gift } from 'src/app/models/desserts';
import { GiftsService } from 'src/app/services/gifts.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-gift-detail',
  templateUrl: './gift-detail.component.html',
  styleUrls: ['./gift-detail.component.css']
})
export class GiftDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private giftsService: GiftsService, private _snackBar: MatSnackBar) { }

  gift: Gift = { name: '', price: '', description: '' };
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.giftsService.getGift(+id).subscribe(data => {
        this.gift = data;
      })
    })
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close',
      {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-primary']
      })
  }

}


