import { Component, OnInit, Inject } from '@angular/core';
import { Rug } from '../shared/rug';
import { RugService } from '../services/rug.service';
import {expand, flyInOut} from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  rugs: Rug[];
  errMess: string;

  constructor(private rugService: RugService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.rugService.getRugs()
      .subscribe(rugs => this.rugs = rugs, errmess => this.errMess = <any>errmess);
  }

}
