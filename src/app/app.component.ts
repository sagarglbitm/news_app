import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NewsService } from './Service/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'News';
  public sources: any = [];
  public articles: any = [];
  public selectedNewsChannel: string = "Top Trending News";
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  constructor(private observer: BreakpointObserver, private cd: ChangeDetectorRef, private newsApi: NewsService) {

  }
  ngOnInit(): void {
    this.newsApi.initArticles()
      .subscribe((res: any) => {
        console.log(res)
        this.articles = res.articles;
      })
    this.newsApi.initSources()
      .subscribe((res: any) => {
        console.log(res)
        this.sources = res.sources;
      })

  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    this.sideNav.opened = true;
    this.observer.observe(['(max-width:700px)'])
      .subscribe((res) => {
        if (res?.matches) {
          this.sideNav.mode = "over";
          this.sideNav.close();
        }
        else {
          this.sideNav.mode = "side";
          this.sideNav.open();

        }
      })
    this.cd.detectChanges();
  }
  searchSource(source:any){
    this.newsApi.getArticleByid(source.id)
    .subscribe((res:any)=>{
      this.selectedNewsChannel = source.name
      this.articles = res.articles;
    })
  }
}
