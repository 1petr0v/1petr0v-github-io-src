import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  PROFILE_API_URL: string = "https://yta5vs24e0.execute-api.us-east-1.amazonaws.com/default/profileDataFetcher";
  profileData!: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({})
    };
    this.http.get<string>(this.PROFILE_API_URL, httpOptions).subscribe((data: string) => {
      this.profileData = data;
    });
  }

}
