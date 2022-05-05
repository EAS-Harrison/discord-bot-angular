import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fact Table';


  posts: any

  constructor(private http: HttpClient) { }
  //Done
  getRandom() {
    this.http.get("/api/facts/random").subscribe(
      data => {
        this.posts = data;
      }
    );
  }
  topic() {
    this.http.get("/api/facts/topic?topic=").subscribe(
      data => {
        this.posts = data;
      }
    );
  }
  //Done
  getTopics() {
    this.http.get("/api/facts/allTopics").subscribe(
      data => {
        this.posts = data;
      }
    );
  }
  actions() {
    this.http.get("/api/facts/actions").subscribe(
      data => {
        this.posts = data;
      }
    );
  }
  delete() {
    this.http.get("/api/facts/delete").subscribe(
      data => {
        this.posts = data;
      }
    );
  }
  add() {
    this.http.get("/api/facts/add").subscribe(
      data => {
        this.posts = data;
      }
    );
  }
  //Done
  all() {
    this.http.get("/api/facts").subscribe(
      data => {
        this.posts = data;
      }
    );
  }
}