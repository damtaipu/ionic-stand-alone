import { ChangeDetectionStrategy, Component, EnvironmentInjector, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly environmentInjector: EnvironmentInjector = inject(EnvironmentInjector);
}
