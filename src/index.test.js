import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});
describe('index.html', () => {
  it('should say hi', (done) => { // asych activity, so have to tell mocha when done
    const index = fs.readFileSync('./src/index.html', "utf-8");

    // done dift if there is javascript requirement
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('saying hi');
      done();
      window.close();
    });
  });
});
