import { createElement } from "complate-stream";

export default function Badge({ contextual = "secondary", href, pill }, ...children) {
	let tag = "span";
	let attrs = {};
	if(href) {
		tag = "a";
		attrs["href"] = href;
	}
	let classNames = ["badge"];
	classNames.push(`badge-${contextual}`);
	if(pill) {
		classNames.push("badge-pill");
	}
	attrs["class"] = classNames.join(" ");
	return createElement(tag, attrs, children);
}
