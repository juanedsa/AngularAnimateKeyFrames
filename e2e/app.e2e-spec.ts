import { NgAnimateKeyframesPage } from './app.po';

describe('ng-animate-keyframes App', function() {
  let page: NgAnimateKeyframesPage;

  beforeEach(() => {
    page = new NgAnimateKeyframesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
