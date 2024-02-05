import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
 
import { NewsService } from './news.service';
 
describe('NewsService', () => {
  let service: NewsService;
  let http: HttpClient;
  let httpController: HttpTestingController;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsService]
    });
    service = TestBed.inject(NewsService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });
 
  afterEach(() => {
    httpController.verify();
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  it('should fetch sports details', () => {
    const mockSportsData = {
      articles: [
        { title: 'Sports Article 1', description: 'Description 1' },
        { title: 'Sports Article 2', description: 'Description 2' },
        { title: 'Sports Article 3', description: 'Description 3' }
      ]
    };
 
    service.getSports().subscribe((data: any) => {
      expect(data.articles.length).toBe(3);
      expect(data.articles[0].title).toBe('Sports Article 1');
      expect(data.articles[1].description).toBe('Description 2');
      expect(data.articles[2].title).toBe('Sports Article 3');
    });
 
    const req = httpController.expectOne('https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=ec51b44e31794f0bb33c4da05be55c90');
    expect(req.request.method).toBe('GET');
    req.flush(mockSportsData);
  });
 
  it('should fetch entertainment details', () => {
    const mockEntertainmentData = {
      articles: [
        { title: 'Entertainment Article 1', description: 'Description 1' },
        { title: 'Entertainment Article 2', description: 'Description 2' },
        { title: 'Entertainment Article 3', description: 'Description 3' }
      ]
    };
 
    service.getEntertainment().subscribe((data: any) => {
      expect(data.articles.length).toBe(3);
      expect(data.articles[0].title).toBe('Entertainment Article 1');
      expect(data.articles[1].description).toBe('Description 2');
      expect(data.articles[2].title).toBe('Entertainment Article 3');
    });
 
    const req = httpController.expectOne('https://newsapi.org/v2/top-headlines?category=entertainment&country=in&apiKey=ec51b44e31794f0bb33c4da05be55c90');
    expect(req.request.method).toBe('GET');
    req.flush(mockEntertainmentData);
  });
  it('should fetch business details', () => {
    const mockBusinessData = {
      articles: [
        { title: 'Business Article 1', description: 'Description 1' },
        { title: 'Business Article 2', description: 'Description 2' },
        { title: 'Business Article 3', description: 'Description 3' }
      ]
    };
 
    service.getBuisness().subscribe((data: any) => {
      expect(data.articles.length).toBe(3);
      expect(data.articles[0].title).toBe('Business Article 1');
      expect(data.articles[1].description).toBe('Description 2');
      expect(data.articles[2].title).toBe('Business Article 3');
    });
 
    const req = httpController.expectOne('https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=ec51b44e31794f0bb33c4da05be55c90');
    expect(req.request.method).toBe('GET');
    req.flush(mockBusinessData);
  });
  it('should initialize articles', () => {
    const mockInitData = {
      articles: [
        { title: 'Article 1', description: 'Description 1' },
        { title: 'Article 2', description: 'Description 2' },
        { title: 'Article 3', description: 'Description 3' }
      ]
    };
 
    service.initArticles().subscribe((data: any) => {
      expect(data.articles.length).toBe(3);
      expect(data.articles[0].title).toBe('Article 1');
      expect(data.articles[1].description).toBe('Description 2');
      expect(data.articles[2].title).toBe('Article 3');
    });
 
    const req = httpController.expectOne('https://newsapi.org/v2/top-headlines?country=in&apiKey=ec51b44e31794f0bb33c4da05be55c90');
    expect(req.request.method).toBe('GET');
    req.flush(mockInitData);
  });
 
  it('should initialize sources', () => {
    const mockInitSourcesData = {
      sources: [
        { id: 'source1', name: 'Source 1' },
        { id: 'source2', name: 'Source 2' },
        { id: 'source3', name: 'Source 3' }
      ]
    };
 
    service.initSources().subscribe((data: any) => {
      expect(data.sources.length).toBe(3);
      expect(data.sources[0].id).toBe('source1');
      expect(data.sources[1].name).toBe('Source 2');
      expect(data.sources[2].id).toBe('source3');
    });
 
    const req = httpController.expectOne('https://newsapi.org/v2/sources?language=en&apiKey=ec51b44e31794f0bb33c4da05be55c90');
    expect(req.request.method).toBe('GET');
    req.flush(mockInitSourcesData);
  });
 
  it('should fetch articles by source', () => {
    const mockSource = 'example-source';
    const mockArticlesData = {
      articles: [
        { title: 'Article 1', description: 'Description 1' },
        { title: 'Article 2', description: 'Description 2' },
        { title: 'Article 3', description: 'Description 3' }
      ]
    };
 
    service.getArticleByid(mockSource).subscribe((data: any) => {
      expect(data.articles.length).toBe(3);
      expect(data.articles[0].title).toBe('Article 1');
      expect(data.articles[1].description).toBe('Description 2');
      expect(data.articles[2].title).toBe('Article 3');
    });
 
    const req = httpController.expectOne(`https://newsapi.org/v2/top-headlines?sources=${mockSource}&apiKey=ec51b44e31794f0bb33c4da05be55c90`);
    expect(req.request.method).toBe('GET');
    req.flush(mockArticlesData);
  });
});