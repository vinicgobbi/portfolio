import { Component } from '@angular/core';
import { Header } from '../header/header';
import { About } from '../about/about';
import { Stacks } from '../stacks/stacks';
import { Projects } from '../projects/projects';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Navbar,Header, About, Stacks, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
