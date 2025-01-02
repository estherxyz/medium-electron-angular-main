import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GenaiService {
  constructor(private http: HttpClient) {}
  
  // set url
  private apiUrl = 'https://openrouter.ai/api/v1/chat/completions';

  // set request header
  private apiKey = import.meta.env.NG_APP_API_KEY_OPENROUTER;
  private reqHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.apiKey
    })
  }


  // POST request
  postData(payload: any) {
    // set request body
    const reqBody = {
      "model": "google/gemini-2.0-flash-thinking-exp:free",
      "messages": [
          {
              "role": "user",
              "content": payload.question + ". please answer in 15 words."
          }
      ],
      "top_p": 1,
      "temperature": 1,
      "frequency_penalty": 0,
      "presence_penalty": 0,
      "repetition_penalty": 1,
      "top_k": 0
    }

    // POST request
    return this.http.post(this.apiUrl, reqBody, this.reqHeader)
  }

}
