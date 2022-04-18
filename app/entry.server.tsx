import type { EntryContext } from '@remix-run/react/entry';
import { RemixServer } from '@remix-run/react';
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

export default function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
) {
	const markup = renderToString(
		<StrictMode>
			<RemixServer context={remixContext} url={request.url} />
		</StrictMode>,
	);

	responseHeaders.set('Content-Type', 'text/html');

	return new Response('<!DOCTYPE html>' + markup, {
		status: responseStatusCode,
		headers: responseHeaders,
	});
}
