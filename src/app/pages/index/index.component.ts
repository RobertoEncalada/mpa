import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  constructor(private titleService: Title) { }
  title = 'Creado por Usuarios, Para Usuarios';
  ngOnInit() {
      this.titleService.setTitle('Netflix');
  }

}
