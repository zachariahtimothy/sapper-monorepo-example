import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const name = 'mcsappercore';

export default {
	input: 'Nav.svelte',
	output: [
		{ file: pkg.main, 'format': 'iife', name }
	],
	plugins: [
    resolve(),
    commonjs(),
		svelte({
      // emitCss: true,
      generate: 'ssr',
		})
	]
};