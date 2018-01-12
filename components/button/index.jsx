import { createElement } from "complate-stream";

export default function Button({ class: additionalClass, active, disabled, block, outline, contextual, title, type: typeName, size }, ...children) {
	let classNames = ["btn"];

	if(additionalClass) {
		classNames.push(additionalClass);
	}

	if(active) {
		classNames.push("active");
	}

	if(disabled) {
		classNames.push("disabled");
	}

	if(contextual && outline) {
		classNames.push(`btn-outline-${contextual}`);
	} else if(contextual) {
		classNames.push(`btn-${contextual}`);
	}

	if(size) {
		classNames.push(`btn-${size}`);
	}

	if(block) {
		classNames.push("btn-block");
	}

	if(!typeName) {
		typeName = "button";
	}

	return <button disabled={disabled} type={typeName} class={classNames.join(" ")} title={title} aria-role="button">
		{children}
	</button>;
}
