import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { ShapePuzzleCaptcha } from '../src/ShapePuzzleCaptcha.js';
import '../src/shape-puzzle-captcha.js';

describe('ShapePuzzleCaptcha', () => {
  // add other tests here
  
  it('passes the a11y audit', async () => {
    const el = await fixture<ShapePuzzleCaptcha>(html`<shape-puzzle-captcha></shape-puzzle-captcha>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
