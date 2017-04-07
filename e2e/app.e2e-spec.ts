import { PersonalWebsiteNG2Page } from './app.po';

describe('personal-website-ng2 App', () => {
  let page: PersonalWebsiteNG2Page;

  beforeEach(() => {
    page = new PersonalWebsiteNG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
