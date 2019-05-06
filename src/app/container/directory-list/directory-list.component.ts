import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/container/model/student';

@Component({
  selector: 'csd-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.css']
})

export class DirectoryListComponent implements OnInit {

  @Output() userOutput: EventEmitter<object> = new EventEmitter();

  students: Student[];

  constructor() {
    this.students = [
      {
        first: 'Arisabeth',
        nick: 'Becky',
        last: 'Simphoukham',
        phone: '209-981-1579',
        slack: 'RizSim',
        email: 'asimphoukham@codestack.co',
        interests: 'Netflix & CHILL',
      },
      {
        first: 'Matthew',
        nick: 'Matt',
        last: 'Hicks',
        phone: '209-642-3428',
        slack: 'Matthew',
        email: 'mhicks@codestack.co',
        interests: 'Swimming'
      },
      {
        first: 'John',
        nick: 'John',
        last: 'Pagtama',
        phone: '209-898-5230',
        slack: 'John',
        email: 'pagtamajr@gmail.com',
        interests: 'Video Games'
      },
      {
        first: 'Thomas',
        nick: 'Tommy',
        last: 'Huante',
        phone: '209-351-2806',
        slack: 'Thomas Huante',
        email: 'thuante@codestack.co',
        interests: 'Golfing'
      },
      {
        first: 'Anthony',
        nick: 'Tony',
        last: 'Mannor',
        phone: '209-482-0539',
        slack: 'Tony Mannor',
        email: 'amannor@codestack.co',
        interests: 'Sleeping'
      },
      {
        first: 'Joseph',
        nick: 'Joe',
        last: 'Obligar',
        phone: '209-546-2430',
        slack: 'Joe',
        email: 'josephlobligar@gmail.com',
        interests: 'Coding, photography, travelling'
      },
      {
        first: 'Lincoln',
        nick: 'Wokanoga',
        last: 'MacKay',
        phone: '209-663-9428',
        slack: 'LincolnM',
        email: 'lmackay@codestack.co',
        interests: 'Skiing, Cooking, Tennis, Dota2.'
      },
      {
        first: 'Daniel',
        nick: 'dBo',
        last: 'Hana',
        phone: 'NA',
        slack: 'danielaprimbaz',
        email: 'dhana@codestack.co',
        interests: 'Video games, memes, drinking'
      },
      {
        first: 'Branton',
        nick: 'Jay Smooveth',
        last: 'James Allen',
        phone: '209-403-5605',
        slack: 'Branton James',
        email: 'bboyjames964@gmail.com',
        interests: 'Photography, videography, Music Productions'
      },
      {
        first: 'Jose',
        nick: 'Jose',
        last: 'Cabral',
        phone: '209-610-4155',
        slack: 'Jose C',
        email: 'jcabral@codestack.co',
        interests: 'Photography'
      },
      {
        first: 'Ernesto',
        nick: 'Ernie',
        last: 'Padilla',
        phone: '209-601-6865',
        slack: 'Ernesto Padilla',
        email: 'invsncloud@gmail.com',
        interests: 'Cars, Photography, Video Games'
      },
      {
        first: 'Francisco',
        nick: 'Paco',
        last: 'Cruz',
        phone: '925-998-7140',
        slack: 'i only drink and know things',
        email: 'fcruz@codestack.co',
        interests: 'Soccer, Gym, jogging, poker, programming'
      }
    ];
  }

  ngOnInit() {
  }


  // Cassandra said "This is so javascript."  This makes me think that I shouldn't be doing this.
  // nameClick(e: Student) {

  //   if (this.lastElement == null) {
  //     e.target.className = 'list-group-item list-group-item-action active';
  //     this.lastElement = e;
  //   } else if (e !== this.lastElement) {
  //     console.log(this.lastElement);
  //     e.target.className = 'list-group-item list-group-item-action active';
  //     this.lastElement.target.className = 'list-group-item list-group-item-action';
  //     this.lastElement = e;
  //   }
  // }

  nameClick(e: Student) {
    this.userOutput.emit(e);
  }
}
