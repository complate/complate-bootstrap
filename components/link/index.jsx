import { createElement } from "complate-stream";

export default function Link(params, ...children) {
	let { active, disabled, href, title } = params;
	let classes = ["nav-link"];
	if(active) {
		classes.push("active");
	}
	if(disabled) {
		classes.push("disabled");
	}
	if(disabled) {
		return <a class={classes.join(" ")} title={title}>{children}</a>;
	} else {
		return <a class={classes.join(" ")} href={href} title={title}>{children}</a>;
	}
}
