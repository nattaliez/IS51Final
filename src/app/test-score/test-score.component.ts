import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

export interface ITest {
  id: number,
  testName: string,
  pointsPossible: number,
  pointsReceived: number,
  percentage: number,
  grade: string
}
@Component({
  selector: 'app-test-score',
  templateUrl: './test-score.component.html',
  styleUrls: ['./test-score.component.css']
})
export class TestScoreComponent implements OnInit {

  test: Array<ITest> = [];
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
  }

  addTest() {
    this.test.unshift(<ITest>{
      'id': null,
      'testName': null,
      'pointsPossible': null,
      'pointsReceived': null,
      'percentage': null,
      'grade': null
    });
  }
}
