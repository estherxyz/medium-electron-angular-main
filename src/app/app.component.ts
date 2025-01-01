import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Send Request';

  data: any;

  constructor(private apiService: ApiService) {}

  // GET
  reqGetApi() {
    this.apiService.getData().subscribe((resp) => {
      this.data = resp;
      console.log(this.data);
    });
  }

  // POST
  reqPostApi() {
    this.apiService.postData().subscribe((resp) => {
      this.data = resp;
      console.log(this.data);
    });
  }

}
