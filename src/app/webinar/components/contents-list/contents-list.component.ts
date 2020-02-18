import { ContentServiceService } from './../../services/content-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-contents-list',
  templateUrl: './contents-list.component.html',
  styleUrls: ['./contents-list.component.css']
})
export class ContentsListComponent implements OnInit {

  private contentIds;
  public contents$;

  constructor(private contentService: ContentServiceService, private router: Router) {
    this.contentIds = ['do_21271495890662195216630', 'do_21267388754619596811017'];
  }
  ngOnInit() {
    this.contents$ = this.fetchContents(this.contentIds);
  }

  private fetchContents(contentIds) {
    return this.contentService.readContents(contentIds);
  }

  public onBookClick(content) {
    this.router.navigate([`webinar/play/${_.get(content, 'identifier')}`]);
  }

}
