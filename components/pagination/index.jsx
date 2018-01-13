import { createElement } from "complate-stream";

export function Pagination(
	{ "aria-label": label, class: additionalClass, size },
	...children
) {
	let klass = ["pagination"];
	if (additionalClass) {
		klass.push(additionalClass);
	}
	if (size) {
		klass.push(`pagination-${size}`);
	}
	return (
		<nav aria-label={label}>
			<ul class={klass.join(" ")}>{children}</ul>
		</nav>
	);
}

export function PageItem({ active, disabled, href }, ...children) {
	let tag = "span";
	let attrs = { class: "page-link" };
	let klass = ["page-item"];
	if (active) {
		klass.push("active");
	}
	if (disabled || !href) {
		klass.push("disabled");
		attrs["tabindex"] = -1;
	}
	if (href) {
		tag = "a";
		attrs["href"] = href;
	}
	return (
		<li class={klass.join(" ")}>{createElement(tag, attrs, children)}</li>
	);
}
