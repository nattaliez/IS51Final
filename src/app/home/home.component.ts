import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../localStorageService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {

  }

saveItemsToLocalStorage(contancts: Array<null>) {
}