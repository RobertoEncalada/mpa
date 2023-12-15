import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { Netflix } from '../../interfaces/netflix';
import { NetflixService } from '../../providers/netflix.service';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers: [NetflixService],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public data : Netflix[] = [];
  constructor(private dataProvider: NetflixService, private titleService: Title) { }
  title = 'mpa';
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      let dataArray = (response as Netflix[]); 
      this.data = dataArray.slice(0,10);

      this.titleService.setTitle('Acerca de');
    })
  }
  
}
