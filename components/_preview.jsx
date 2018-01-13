import { context } from "./env";
import { createElement } from "complate-stream";

let title = "Fractal Preview";
let stylesheets = [
	"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css",
	context.uri("common-assets", "bundle.css")
];
let scripts = [
	"https://code.jquery.com/jquery-3.2.1.slim.min.js",
	"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
	"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js",
	context.uri("common-assets", "bundle.js")
];

export default function PreviewLayout({ context }, ...children) {
	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<title>{title}</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				{renderStyleSheets(stylesheets)}
			</head>

			<body>
				{children}

				{renderScripts(scripts)}
			</body>
		</html>
	);
}

function renderStyleSheets(items) {
	if (!items || !items.length) {
		return;
	}

	return items.map(uri => {
		return <link rel="stylesheet" href={uri} />;
	});
}

function renderScripts(items) {
	if (!items || !items.length) {
		return;
	}

	return items.map(uri => {
		return <script src={uri} />;
	});
}
