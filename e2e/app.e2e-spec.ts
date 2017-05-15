import { SoundsUpFrontendPage } from './app.po';

describe('sounds-up-frontend App', () => {
  let page: SoundsUpFrontendPage;

  beforeEach(() => {
    page = new SoundsUpFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
