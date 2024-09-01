import { HttpInterceptorFn } from '@angular/common/http';
import { ProgressBarService } from '../services/progress-bar.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';

export const httpInterceptorFn: HttpInterceptorFn = (req, next) => {
  const progressBarService = inject(ProgressBarService);
  progressBarService.show();

  return next(req).pipe(
    finalize(() => progressBarService.hide())
  );
};
