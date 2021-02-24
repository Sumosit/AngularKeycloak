import {Component, Injectable, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import {root} from 'rxjs/internal-compatibility';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})

export class RatesComponent implements OnInit {

  @Input() isAdmin: boolean;

  ratesList: Object;
  constructor(private data: DataService,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.GetRates();
  }

  async GetRates() {
    // let response = await this.data.GetRates();
    // let data = await response.json();
    // this.ratesList = data;
    const promise = this.httpClient.get('http://localhost:8080/rates-list').toPromise();
    console.log(promise);
    promise.then((data) => {
      this.ratesList = data;
      console.log('Promise resolved with: ' + JSON.stringify(data));
    }).catch((error) => {
      console.log('Promise rejected with ' + JSON.stringify(error));
    });
  }
}
