import { createElement } from "complate-stream";

export default function Badge(params, ...children) {
	params = params || {};
	let tag = "span";
	let attrs = {};
	if(params.href) {
		tag = "a";
		attrs["href"] = params.href;
	}
	let classNames = ["badge"];
	if(params.pill) {
		classNames.push("badge-pill");
	}
	if(params.contextual) {
		classNames.push(`badge-${params.contextual}`);
	} else {
		classNames.push("badge-secondary");
	}
	attrs["class"] = classNames.join(" ");
	return createElement(tag, attrs, children);
}
