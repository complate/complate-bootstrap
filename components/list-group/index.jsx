import { createElement } from "complate-stream";

export function ListGroup({ class: additionalClass }, ...children) {
	let klass = ["list-group"];

	if (additionalClass) {
		klass.push(additionalClass);
	}

	return <ul class={klass.join(" ")}>{children}</ul>;
}

export function ListGroupItem(
	{ class: additionalClass, active, disabled, contextual, href },
	...children
) {
	let klass = ["list-group-item"];

	if (additionalClass) {
		klass.push(additionalClass);
	}

	if (active) {
		klass.push("active");
	}

	if (disabled) {
		klass.push("disabled");
	}

	if (contextual) {
		klass.push(`list-group-item-${contextual}`);
	}

	let listGroupItem;

	if (href) {
		klass.push("list-group-item-action");
		listGroupItem = (
			<a href={href} class={klass.join(" ")}>
				{children}
			</a>
		);
	} else {
		listGroupItem = <li class={klass.join(" ")}>{children}</li>;
	}

	return listGroupItem;
}
