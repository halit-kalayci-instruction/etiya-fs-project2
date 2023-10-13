import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  requestCount: number = 0;
  isLoadingSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {}

  startLoading() {
    this.requestCount++;
    this.isLoadingSubject$.next(this.requestCount > 0);
  }
  stopLoading() {
    this.requestCount--;
    if (this.requestCount < 0) this.requestCount = 0;
    this.isLoadingSubject$.next(this.requestCount > 0);
  }
}
