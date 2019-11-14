import { createElement } from "complate-stream";

export function Card(_, ...children) {
	return <div class="card">{ children }</div>;
}

export function CardImg({ src, alt }, ...children) {
	return <img class="card-img-top" src={ src } alt={ alt }/>;
}

export function CardHeader({ level = "4" }, ...children) {
	let attrs = {
		class: "card-header"
	};

	return createElement(`h${level}`, attrs, children);
}

export function CardBody(_, ...children) {
	return <div class="card-body">{ children }</div>;
}

export function CardTitle({ level = "5" }, ...children) {
	let attrs = {
		class: "card-title"
	};

	return createElement(`h${level}`, attrs, children);
}

export function CardSubtitle({ level = "6", class: additionalClass }, ...children) {
	let klass = ["card-subtitle"];

	if(additionalClass) {
		klass.push(additionalClass);
	}

	let attrs = {
		class: klass.join(" ")
	};

	return createElement(`h${level}`, attrs, children);
}

export function CardText(_, ...children) {
	return <p class="card-text">{ children }</p>;
}
