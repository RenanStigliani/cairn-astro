// Adds the site base path to root-relative links and images in Markdown,
// so content can link to "/regras/" whatever path the site is served from.
import { defineMdastPlugin } from 'satteri';

export function basePathPlugin(base) {
	const prefix = base.replace(/\/$/, '');
	const withBase = (url) =>
		prefix && url.startsWith('/') && !url.startsWith('//') ? prefix + url : url;

	return defineMdastPlugin({
		name: 'base-path',
		link(node, ctx) {
			ctx.setProperty(node, 'url', withBase(node.url));
		},
		image(node, ctx) {
			ctx.setProperty(node, 'url', withBase(node.url));
		},
		html(node, ctx) {
			const value = node.value.replace(/\b(href|src)="([^"]*)"/g, (_, attr, url) => `${attr}="${withBase(url)}"`);
			ctx.setProperty(node, 'value', value);
		},
	});
}
