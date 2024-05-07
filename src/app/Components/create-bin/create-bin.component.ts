import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DbServicesService } from '../../Services/db-services.service';
import { Snippets } from '../../../Models';

@Component({
  selector: 'app-create-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-bin.component.html',
  styleUrl: './create-bin.component.css',
})
export class CreateBinComponent {
  constructor(private dbService: DbServicesService) {}
  title = new FormControl('', [Validators.required]);

  binCode = new FormControl('', [Validators.required]);

  binform = new FormGroup({
    title: this.title,
    binCode: this.binCode,
  });

  submitBinCode() {
    console.log(this.binform.value);
    this.dbService.createBinCode(this.binform.value as Snippets);
  }

  
}
