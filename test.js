const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('no erroneous tags', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  const dom = new JSDOM(fileContent);
  const erroneousTags = dom.window.document.querySelectorAll('marquee, blink'); // test cases here. 
  expect(erroneousTags.length).toBe(0);
});
