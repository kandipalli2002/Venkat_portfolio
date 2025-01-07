import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatChipsModule,MatIconModule,MatProgressBarModule,MatCardModule,MatStepperModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Venkat-Portfolio';
}
