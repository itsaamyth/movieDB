import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HomeService } from '../../services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public imgURL = 'https://image.tmdb.org/t/p/w500/'
  public movieList:any=[]
  loading = false;
  page = 1;

  constructor(private homeService:HomeService){
   this.getMovies()
  }

  getMovies(){
    this.loading=true;
    this.homeService.getPopularMovies(this.page).subscribe((res)=>{
      this.movieList.push(...res.results)
      this.page++
      this.loading=false
    });

 }

 getPercentValue(value:any){
  return Math.floor(value * 10);
 }

 @HostListener('window:scroll',['$event'])
  onWindowScroll(event:any){
    
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight&&!this.loading){
      console.log(event);
      this.getMovies()
    }
  }



}
