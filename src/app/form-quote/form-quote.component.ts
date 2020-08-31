import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-quote',
  templateUrl: './form-quote.component.html',
  styleUrls: ['./form-quote.component.css'],
})
export class FormQuoteComponent implements OnInit {
  quote: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.quote = this.fb.group({
      company_name: '',
      email: '',
      phone: '',
      address_line1: '',
      address_line2: '',
    });
    this.quote.valueChanges.subscribe(console.log);
  }
}
