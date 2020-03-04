import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
    public latitude = -59.834541;
    public longitude =  10.437390;

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:14961/api/locationtime';

getConfig() {
        return this.http.get(`${this.configUrl}/l/?latitude=${this.latitude}&longitude=${this.longitude}`);
    }
}
