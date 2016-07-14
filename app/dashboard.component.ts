import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { MyExpandoCmp } from './expando.component';


@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
  directives: [ MyExpandoCmp ]

})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private router: Router,
    private heroService: HeroService) {
  }
  ngOnInit() {
    this.heroService.getHeroes()
                     .subscribe(
                       heroes => this.heroes = heroes.slice(1,8),
                       error =>  this.errorMessage = <any>error);
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}

