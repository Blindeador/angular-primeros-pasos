import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
import { AddCharacterComponent } from '../components/add-character/add-character.component';

@Injectable({
  providedIn: 'root'
})
export class dbzService {

  public characters: Character[] = [
  { id: uuid(), name: 'Goku', power: 10000 },
  { id: uuid(), name: 'Vegeta', power: 9000 },
  { id: uuid(), name: 'Krillin', power: 7500}];


  AddCharacter(character: Character):void {

  const newCharacter: Character = {
    ...character,
    id: uuid()
  };

  this.characters.push(newCharacter);

  }
// onDeleteCharacter(index: number):void {
//   this.characters.splice(index, 1);
// }
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
