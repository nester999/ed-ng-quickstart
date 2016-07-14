import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';



@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
  directives: [ HeroDetailComponent ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero: any;
  error: any;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }

  deleteHero(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService
        .delete(hero)
        .then(res => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        })
        .catch(error => this.error = error);
  }

  getHeroes() {
    this.heroService.getHeroes()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { 
    this.selectedHero = hero; 
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}




