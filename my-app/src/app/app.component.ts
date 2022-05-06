import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topicValue: any;
  factValue: any;
  topicDeleteValue: any;
  factDeleteValue: any;
  addResult: any
  deleteResult: any;
  topicSearchValue: any
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
    this.http.get("/api/facts/topic?topic=", { topic: this.topicSearchValue }).subscribe(
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
    this.http.post("/api/facts/delete", { fact: this.factDeleteValue, topic: this.topicDeleteValue }).subscribe(
      data => {
        this.deleteResult = "Fact Removed Successfully"
        this.factDeleteValue = ""
        this.topicDeleteValue = ""
      }
    );
  }
  add() {
    this.http.post("/api/facts/add", { fact: this.factValue, topic: this.topicValue }).subscribe(
      data => {
        this.addResult = "Fact added successfully"
        this.factValue = ""
        this.topicValue = ""
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