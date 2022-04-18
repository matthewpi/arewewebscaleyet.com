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
import inter from '~/styles/inter.css';
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
			href: inter,
			as: 'style',
			type: 'text/css',
		},
		{
			rel: 'stylesheet',
			href: inter,
		},
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
		title: 'Are we Webscale yet?',
		description: "idk man, why don't you read this site and find out.",
		viewport: 'width=device-width,initial-scale=1',
	};
};

export default function App() {
	const data = useLoaderData<LoaderData>();

	return (
		<html suppressHydrationWarning lang="en">
			<head>
				<meta httpEquiv="Content-Security-Policy" content={data.csp} />
				<Meta />
				<Links />
			</head>
			<body className="min-h-screen dark:bg-slate-900">
				<Outlet />
				<ScrollRestoration nonce={data.nonce} />
				<Scripts nonce={data.nonce} />
				<LiveReload />
			</body>
		</html>
	);
}
