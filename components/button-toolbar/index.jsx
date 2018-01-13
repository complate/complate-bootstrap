import { createElement } from "complate-stream";

export default function ButtonToolbar({ class: additionalClass, ariaLabel }, ...children) {
	let classNames = ["btn-toolbar"];

	if(additionalClass) {
		classNames.push(additionalClass);
	}

	return <div class={classNames.join(" ")} role="toolbar" aria-label={ariaLabel}>
		{children}
	</div>;
}
