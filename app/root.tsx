import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';

import { getContentSecurityPolicy } from '~/services/csp.server';

import tailwind from '~/tailwind.css';

export interface LoaderData {
	nonce: string;
	csp: string;
}

export const loader: LoaderFunction = () => {
	const _nonce = new Uint8Array(16);
	crypto.getRandomValues(_nonce);
	const nonce = btoa(String.fromCodePoint(..._nonce));

	return json<LoaderData>({
		nonce,
		csp: getContentSecurityPolicy(nonce),
	});
};

export const links: LinksFunction = () => {
	return [
		{
			rel: 'preload',
			href: tailwind,
			as: 'style',
			type: 'text/css',
		},
		{
			rel: 'stylesheet',
			href: tailwind,
		},
	];
};

export const meta: MetaFunction = () => {
	return {
		charset: 'utf-8',
		title: 'arewewebscaleyet.com',
		description: 'Are we webscale yet?',
		viewport: 'width=device-width,initial-scale=1',
	};
};

export default function App() {
	const data = useLoaderData<LoaderData>();

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta httpEquiv="Content-Security-Policy" content={data.csp} />
				<Meta />
				<Links />
			</head>
			<body className="min-h-screen bg-slate-900">
				<Outlet />
				<ScrollRestoration nonce={data.nonce} />
				<Scripts nonce={data.nonce} />
				<LiveReload />
			</body>
		</html>
	);
}
