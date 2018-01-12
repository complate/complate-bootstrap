import { createElement } from "complate-stream";

export default function Dropdown({ id, class: additionalClass, label, variant="secondary",
									 active, disabled, type: typeName = "button", size }, ...children) {

	let classNames = ["dropdown-toggle", "btn", "btn-" + variant];

	if (additionalClass) {
		classNames.push(additionalClass);
	}

	if (active) {
		classNames.push("active");
	}

	if (disabled) {
		classNames.push("disabled");
	}

	if (size) {
		classNames.push(`btn-${size}`);
	}

	if (!typeName) {
		typeName = "button";
	}

	return <div class="dropdown">
		<button class={classNames.join(" ")} data-toggle="dropdown" type={typeName} id={id} aria-haspopup="true" aria-expanded="false">
			{label || "Dropdown"}
		</button>
		<div class="dropdown-menu" aria-labelledby={id}>
	    	{children}
		</div>
	  </div>
}
