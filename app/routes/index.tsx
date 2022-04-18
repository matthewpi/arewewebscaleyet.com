export default function Index() {
	return (
		<div className="relative overflow-hidden py-16">
			<Pattern />

			<div className="relative px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-prose text-lg">
					<h1 className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-slate-900 dark:text-white sm:text-4xl">
						Are we webscale yet?{' '}
						<span className="text-slate-500 dark:text-slate-400">No.</span>
					</h1>
				</div>

				<div className="prose prose-lg prose-indigo mx-auto mt-6 text-slate-500 dark:text-slate-400">
					<p>Coming Soon&trade;</p>
				</div>
			</div>
		</div>
	);
}

function Pattern() {
	return (
		<div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
			<div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
				<svg
					className="absolute top-12 left-full translate-x-32 transform"
					width={404}
					height={384}
					fill="none"
					viewBox="0 0 404 384"
				>
					<defs>
						<pattern
							id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
							x={0}
							y={0}
							width={20}
							height={20}
							patternUnits="userSpaceOnUse"
						>
							<rect
								x={0}
								y={0}
								width={4}
								height={4}
								className="text-slate-200 dark:text-slate-700"
								fill="currentColor"
							/>
						</pattern>
					</defs>
					<rect
						width={404}
						height={384}
						fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
					/>
				</svg>
				<svg
					className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
					width={404}
					height={384}
					fill="none"
					viewBox="0 0 404 384"
				>
					<defs>
						<pattern
							id="f210dbf6-a58d-4871-961e-36d5016a0f49"
							x={0}
							y={0}
							width={20}
							height={20}
							patternUnits="userSpaceOnUse"
						>
							<rect
								x={0}
								y={0}
								width={4}
								height={4}
								className="text-slate-200 dark:text-slate-700"
								fill="currentColor"
							/>
						</pattern>
					</defs>
					<rect
						width={404}
						height={384}
						fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
					/>
				</svg>
				<svg
					className="absolute bottom-12 left-full translate-x-32 transform"
					width={404}
					height={384}
					fill="none"
					viewBox="0 0 404 384"
				>
					<defs>
						<pattern
							id="d3eb07ae-5182-43e6-857d-35c643af9034"
							x={0}
							y={0}
							width={20}
							height={20}
							patternUnits="userSpaceOnUse"
						>
							<rect
								x={0}
								y={0}
								width={4}
								height={4}
								className="text-slate-200 dark:text-slate-700"
								fill="currentColor"
							/>
						</pattern>
					</defs>
					<rect
						width={404}
						height={384}
						fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
					/>
				</svg>
			</div>
		</div>
	);
}
