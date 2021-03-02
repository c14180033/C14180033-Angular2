import { Component, OnInit } from '@angular/core';
import { GlobvarService } from '../globvar.service';
import { Notes } from '../notes';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-hal1',
  templateUrl: './hal1.component.html',
  styleUrls: ['./hal1.component.css']
})
export class Hal1Component implements OnInit {

  inputJudul = '';
  inputIsi = '';
  tglDibuat = new Date();

  constructor(public globVar: GlobvarService) { 
    
  }

  ngOnInit() {

  }

  saveNote() {
    console.log(this.tglDibuat);
    this.globVar.pushNotes(new Notes(
      this.inputJudul,
      this.inputIsi,
      this.tglDibuat)
    );
    console.log(this.globVar.arrNotes)
  }
}