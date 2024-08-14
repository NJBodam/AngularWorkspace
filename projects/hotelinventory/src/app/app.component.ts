import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Room } from './rooms/room';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hotel Inventory';
  numberOfRooms = 10;
  hiderooms = false;
  rooms : Room = {  
  // import statements
  
  import { CommonModule } from '@angular/common';
  
  
  
  @Component({
  
    selector: 'app-root',
  
    templateUrl: './app.component.html',
  
    styleUrls: ['./app.component.css'],
  
    imports: [CommonModule] // Add CommonModule to the imports array
  
  })
  
  export class AppComponent {
  
    // component code
  
  }
  
    availableRooms: 5,
    bookedRooms: 0,
    totalRooms: 5
  }
  
  toggle() {
    this.hiderooms = !this.hiderooms;
  }

}
