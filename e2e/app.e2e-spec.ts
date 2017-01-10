import { InterviewPage } from './app.po';

describe('interview App', function() {
  let page: InterviewPage;

  beforeEach(() => {
    page = new InterviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
