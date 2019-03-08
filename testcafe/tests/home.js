import Page from '../page-objects/home-page';
import { ClientFunction } from 'testcafe';
fixture `Home Page Tests`
    .page `http://localhost:8082/`;

// Page model
const page = new Page();
const getPageUrl = ClientFunction(() => window.location.href.toString());
// Tests
test('Assert Title', async t => {
    await t
        .expect(page.title.innerText).eql('AngularCliDemo'); // Check result
});