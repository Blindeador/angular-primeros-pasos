import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { NgIf } from '@angular/common';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})
export class ListComponent{

  @Output()
  public onDelete: EventEmitter<string>= new EventEmitter;

  @Input()
  public charactersList: Character[] = [
    { name: 'Trunks', power: 10 },
     { name: 'Picolo', power: 5000

      }];
dbzService: any;

onDeleteCharacter(id?: string):void{
  if (!id) return;

      this.onDelete.emit(id);
    }
 }
