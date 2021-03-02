import { Injectable } from '@angular/core';
import { Notes } from './notes';

@Injectable()
export class GlobvarService {
  arrNotes = []
  constructor() { 

  }
  public getAllNotes() {
    return this.arrNotes;
  }
  public getNotesIdx(index : string) {
    return this.arrNotes[parseInt(index)];
  }
  public pushNotes(newNotes : Notes) {
    this.arrNotes.push(newNotes)
  }
}