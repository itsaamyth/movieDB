import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  private progressBarVisible = new BehaviorSubject<boolean>(false);
  progressBarVisible$ = this.progressBarVisible.asObservable();

  show() {
    this.progressBarVisible.next(true);
  }

  hide() {
    this.progressBarVisible.next(false);
  }
}
