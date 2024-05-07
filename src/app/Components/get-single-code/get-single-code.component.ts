import { Component } from '@angular/core';
import { DbServicesService } from '../../Services/db-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-single-code',
  standalone: true,
  imports: [],
  templateUrl: './get-single-code.component.html',
  styleUrl: './get-single-code.component.css',
})
export class GetSingleCodeComponent {
  constructor(
    private activeRoute: ActivatedRoute,
    private dbservice: DbServicesService
  ) {}

  codeSnippet = {
    title: '',
    binCode: '',
  };
  ngOnInit() {
    const docId = this.activeRoute.snapshot.paramMap.get('id');
    this.dbservice.getSingleSnipppet(docId!).then((data: any) => {
      this.codeSnippet = data;
      console.log(this.codeSnippet, 'codeSnippet');
    });
  }
}
