import { withOpenTelemetry } from '@baselime/sveltekit-opentelemetry-middleware';
import { BaselimeSDK, BetterHttpInstrumentation } from '@baselime/node-opentelemetry';
import { BASELIME_KEY } from '$env/static/private';

new BaselimeSDK({
	baselimeKey: BASELIME_KEY,
	instrumentations: [new BetterHttpInstrumentation()]
}).start();

export const handle = withOpenTelemetry(({ event, resolve }) => {
	// event.request.headers.forEach((header) => console.log(header));
	return resolve(event);
});
