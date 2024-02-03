import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenuComponent, FooterComponent]
})
export class AppComponent {
  title = 'angular-17';
}
