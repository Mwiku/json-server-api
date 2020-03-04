import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public config;
    title = 'json-server-api';
    public currentDate = '';

    // jun = moment();

    ngOnInit(): void {
       this.showConfig();
    }

    constructor(private configService: ConfigService) {
        let tid = moment.tz('Etc/GMT-1').format('YYYY-DD-MM, HH-mm-ss');
        // this.jun.tz('America/Los_Angeles').format('HH:MM:ss a z');
        console.log(tid);
        // console.log(moment.tz.names());
    }

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
