import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {UserModel} from "./models/user.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatLabel, MatInput, MatFormField, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'untitled';

}
