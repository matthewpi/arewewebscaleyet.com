const csp: Record<string, string[]> = {
	'base-uri': ["'none'"],
	'connect-src': ["'self'"],
	'default-src': ["'none'"],
	'font-src': ["'self'"],
	'img-src': ["'self'", 'data:'],
	'manifest-src': ["'self'"],
	'object-src': ["'none'"],
	'script-src': ["'self'", 'nonce'],
	'style-src': ["'self'"],
};

export function getContentSecurityPolicy(nonce: string): string {
	if (process.env.NODE_ENV === 'development') {
		if (csp['connect-src'] === undefined) {
			csp['connect-src'] = [];
		}

		csp['connect-src'].push('ws://*:*', 'wss://*:*');
	}

	const directives: string[] = [];

	for (const entry of Object.entries(csp)) {
		const directive = entry[0];
		const values = entry[1];

		const value = [];
		for (const v of values) {
			if (v === 'nonce') {
				value.push(`'${v}-${nonce}'`);
				continue;
			}

			value.push(v);
		}

		if (value.length === 0) {
			continue;
		}

		directives.push(`${directive} ${value.join(' ')}`);
	}

	return directives.join('; ');
}
