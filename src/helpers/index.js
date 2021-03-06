/* eslint-disable import/no-namespace */

import * as coreHelpers from './helpers.core';
import * as canvas from './helpers.canvas';
import * as collection from './helpers.collection';
import * as curve from './helpers.curve';
import * as dom from './helpers.dom';
import effects from './helpers.easing';
import * as options from './helpers.options';
import * as math from './helpers.math';
import * as rtl from './helpers.rtl';

import {color, getHoverColor} from './helpers.color';
import {requestAnimFrame, fontString} from './helpers.extras';

export default {
	...coreHelpers,
	canvas,
	collection,
	curve,
	dom,
	easing: {effects},
	options,
	math,
	rtl,

	requestAnimFrame,
	// -- Canvas methods
	fontString,
	color,
	getHoverColor
};
