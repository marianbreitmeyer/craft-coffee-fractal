'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
* Set the engines
*/
const TwigAdapter = require('@frctl/twig')();
fractal.docs.engine(TwigAdapter);
fractal.components.engine(TwigAdapter);

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Crafty Coffee');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('ext', '.twig');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.docs.set('ext', '.twig');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
* Tell Fractal where to save the build 
*/
fractal.web.set('builder.dest', path.join(__dirname, 'dist'));
