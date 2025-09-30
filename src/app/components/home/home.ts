import { Component } from '@angular/core';
import { Header } from '../header/header';
import { About } from '../about/about';
import { Stacks } from '../stacks/stacks';
import { Projects } from '../projects/projects';
import { Navbar } from '../navbar/navbar';
import { Contact } from '../contact/contact';
import { Experience } from '../experience/experience';

@Component({
  selector: 'app-home',
  imports: [Navbar,Header, About, Experience, Stacks, Projects, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
