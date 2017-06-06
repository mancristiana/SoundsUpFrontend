import { SoundsUpFrontendPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('sounds-up', () => {
    let page: SoundsUpFrontendPage;

    beforeEach(() => {
        page = new SoundsUpFrontendPage();
    });

    it('should have a title', function () {
        page.navigateTo();
        expect(browser.getTitle()).toEqual("SoundsUpFrontend");
    });

    it('should have <header>', function () {
        expect(element(by.css('app-root app-header header')).isPresent()).toEqual(true);
    });

    it('should have <main>', function () {
        expect(element(by.css('app-root main')).isPresent()).toEqual(true);
    });

    it('should have a main title', function () {
        expect(element(by.css('main h1')).getText()).toContain('Post page');
    });

});
