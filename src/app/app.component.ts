import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject ';
  animals = [{id: 1, name: 'cat'}];
  plants = [{id: 1, name: 'flower'}, {id: 2, name: 'ficus'}, {id: 3, name: 'tree'}];
  cars = [{id: 1, name: 'tesla'}];

  addAnimal(animalName:string){
    if (animalName){
      this.animals.push({id: this.animals.length+1, name:animalName});
    }
  }
  addPlant(plantName:string) {
    if (plantName) {
      this.plants.push({id: this.plants.length + 1, name: plantName});
    }
  }
  addCar(carName:string) {
    if (carName) {
      this.cars.push({id: this.cars.length + 1, name: carName});
    }
  }

  animalCounter(){
    let counter = 0;
    return counter + this.animals.length;
  }
  plantCounter(){
    let counter = 0;
    return counter +this.plants.length;
  }
  carCounter(){
    let counter = 0;
    return counter +this.cars.length;
  }

 deleteAnimal() {
   this.animals.splice(this.animals.length-1,1);
 }
 deletePlant(){
    this.plants.splice(this.plants.length-1,1);
 }
 deleteCar(){
    this.cars.splice(this.cars.length-1,1);
 }
}

