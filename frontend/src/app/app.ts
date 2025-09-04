import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  constructor(private routes:Router){}

  home(){
    if(this.routes.url === ""){
      return;
    }
    this.routes.navigateByUrl("");
  }

  admission(){
    this.routes.navigate(["/admission"]);
  }

  discharge(){
    this.routes.navigate(["discharge"]);
  }
}
