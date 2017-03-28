import { Angular2SignaturePadPage } from './app.po';

describe('angular2-signature-pad App', () => {
  let page: Angular2SignaturePadPage;

  beforeEach(() => {
    page = new Angular2SignaturePadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
