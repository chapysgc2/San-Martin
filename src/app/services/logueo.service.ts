import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogueoService {
  @Output() disparadorDeLogueo:EventEmitter<any> = new EventEmitter();
  constructor() { }
}