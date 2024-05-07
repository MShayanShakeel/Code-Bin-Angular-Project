import { Component } from '@angular/core';
import { DbServicesService } from '../../Services/db-services.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private dbservice: DbServicesService) {}
  items: { title: String; id: String }[] = [];

  ngOnInit() {
    this.dbservice.getAllSnipppet().then((data: any) => {
      this.items = data;
      console.log(this.items, 'items');
    });
  }
}
