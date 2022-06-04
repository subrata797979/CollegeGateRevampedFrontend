import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.css']
})
export class CollegesComponent implements OnInit {

  @Input() colleges!: any[]

  constructor() { }

  ngOnInit(): void {
  }

}
