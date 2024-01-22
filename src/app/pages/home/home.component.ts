import { Component, OnInit } from '@angular/core';
import { Certificate } from '../../../types';
import certifcatesData from '../../../../data/certificates.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  certificates : Certificate[] = certifcatesData
}
