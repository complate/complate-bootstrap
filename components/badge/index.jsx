import { createElement } from "complate-stream";

export default function Badge(
	{ class: additionalClass, contextual = "secondary", href, pill },
	...children
) {
	let tag = "span";
	let attrs = {};
	if (href) {
		tag = "a";
		attrs["href"] = href;
	}
	let classNames = ["badge", `badge-${contextual}`];
	if (pill) {
		classNames.push("badge-pill");
	}
	if (!additionalClass) {
		classNames.push(additionalClass);
	}
	attrs["class"] = classNames.join(" ");
	return createElement(tag, attrs, children);
}
