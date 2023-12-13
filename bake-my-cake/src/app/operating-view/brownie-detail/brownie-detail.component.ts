import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brownie } from '../../models/brownies';
import { BrowniesService } from '../../services/brownies.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-brownie-detail',
  templateUrl: './brownie-detail.component.html',
  styleUrls: ['./brownie-detail.component.css']
})
export class BrownieDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
     private browniesService: BrowniesService,
     private _snackBar: MatSnackBar) { }


  brownie: Brownie = { name: '', price: '', description: '' };
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.browniesService.getBrownie(+id).subscribe(data => {
        this.brownie = data;
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
