import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public config;
    title = 'json-server-api';
    public currentDate = '';


    ngOnInit(): void {
       this.showConfig();
    }

    constructor(private configService: ConfigService) {}

    showConfig() {
        this.configService.getConfig()
            .subscribe((data: any) => {
            this.config = data;
            console.log(`data: ${JSON.stringify(data.date)}`);
            this.currentDate = JSON.stringify(data.date);
            console.log(`c data : ${this.currentDate}`);

      });
  }
}
