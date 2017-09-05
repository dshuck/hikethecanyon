import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedContainerComponent } from './feed-container.component';

describe('FeedContainerComponent', () => {
  let component: FeedContainerComponent;
  let fixture: ComponentFixture<FeedContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

/*
var FeedMe = require('feedme');
var http = require('http');

http.get('http://www.npr.org/rss/rss.php?id=1001', function(res) {
  var parser = new FeedMe();
  parser.on('title', function(title) {
    console.log('title of feed is', title);
  });
  parser.on('item', function(item) {
    console.log();
    console.log('news:', item.title);
    console.log(item.description);
  });
  res.pipe(parser);
});
*/
