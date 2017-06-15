import { MyProjectsPage } from './app.po';

describe('my-projects App', () => {
  let page: MyProjectsPage;

  beforeEach(() => {
    page = new MyProjectsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
