import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgressBarService  } from './services/progress-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movieDB';
  progressBarVisible$: Observable<boolean>;

  constructor(private progressBarService: ProgressBarService) {
    this.progressBarVisible$ = this.progressBarService.progressBarVisible$;
  }
}
