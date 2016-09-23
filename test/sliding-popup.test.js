/*global describe, it */
import expect from 'expect.js';

import SlidingPopup from './../src/js/sliding-popup';

describe("SlidingPopup", () => {
	it('is defined', () => {
		expect(SlidingPopup).to.be.a('function');
	});
	it('has a static init method', () => {
		expect(SlidingPopup.init).to.be.a('function');
	});
});
