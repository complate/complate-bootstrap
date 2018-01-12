import { createElement } from "complate-stream";

export default function Navigation(params, ...children) {
	let { alignment, withFlexColumns, size, variant } = params;
	let classes = ["nav"];
	if (variant) {
		classes.push("nav-" + variant);
	}
	if (size) {
		classes.push("nav-" + size);
	}
	if (alignment) {
		classes.push(alignment);
	}
	if (withFlexColumns) {
		classes.push("flex-column")
	}

	return <ul class={classes.join(" ")}>
		{children.map(child =>
			{
				return <li class="nav-item">{child}</li>;
			}
		)}
	</ul>;
}
