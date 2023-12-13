import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cookie } from 'src/app/models/cookies';
import { CookiesService } from 'src/app/services/cookies.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cookie-detail',
  templateUrl: './cookie-detail.component.html',
  styleUrls: ['./cookie-detail.component.css']
})
export class CookieDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
  private cookiesService: CookiesService, private _snackBar: MatSnackBar) { }

  cookie: Cookie = { name: '', price: '', description: '' };
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.cookiesService.getCookie(+id).subscribe(data => {
        this.cookie = data;
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
