import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'blog-romain-faune',
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe],
  template: `
    @if(post$ | async; as post) {
    <analog-markdown [content]="post.content"></analog-markdown>
    }
  `,
})
export default class FaunesComponent {
  readonly post$ = injectContent<Post>({
    customFilename: 'faunes',
  });
}
