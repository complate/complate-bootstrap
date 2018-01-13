import { createElement } from "complate-stream";

export function Alert({ contextual, headline, withCloseButton, withFadeOut }, ...children) {
	let classNames = ["alert"];
	let headlineRow;
	let closeButton;

	if(contextual) {
		classNames.push(`alert-${contextual}`);
	}

	if(headline) {
		headlineRow = <h4 class="alert-heading">{headline}</h4>;
	}

	if(withCloseButton) {
		classNames.push("alert-dismissible");
		if(withFadeOut) {
			classNames.push("fade show");
		}
		closeButton = <button type="button" class="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>;
	}

	return <div class={classNames.join(" ")} role="alert">
		{headlineRow}
		{children}
		{closeButton}
	</div>;
}
