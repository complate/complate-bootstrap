import { createElement } from "complate-stream";

export default function ButtonGroup({ class: additionalClass, ariaLabel }, ...children) {
	let classNames = ["btn-group"];

	if(additionalClass) {
		classNames.push(additionalClass);
	}

	return <div class={classNames.join(" ")} role="group" aria-label={ariaLabel}>
		{children}
	</div>;
}
