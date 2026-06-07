import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

interface ExternalLink {
  readonly label: string;
  readonly url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  readonly title = 'Blank';
  readonly headline = 'Ready to create an app?';
  readonly description = 'Start with Ionic';
  readonly componentsLink: ExternalLink = Object.freeze({
    label: 'UI Components',
    url: 'https://ionicframework.com/docs/components',
  });
}
