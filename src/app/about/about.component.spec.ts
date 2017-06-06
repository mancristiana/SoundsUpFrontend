import { TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('About Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [AboutComponent]});
    });

    it('should show success message', () => {
        const fixture = TestBed.createComponent(AboutComponent);
        fixture.detectChanges();
        expect(fixture.nativeElement.children[0].textContent).toContain('About Works!');
    });

});
