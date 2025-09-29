import { Component } from '@angular/core';
import { Header } from '../header/header';
import { About } from '../about/about';
import { Stacks } from '../stacks/stacks';

@Component({
  selector: 'app-home',
  imports: [Header, About, Stacks],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
