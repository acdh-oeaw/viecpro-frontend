import { Client } from "typesense";

const client = new Client({
	nodes: [
		{
			host: import.meta.env.VITE_TYPESENSE_HOST,
			port: import.meta.env.VITE_TYPESENSE_PORT,
			protocol: import.meta.env.VITE_TYPESENSE_PROTOCOL,
		},
	],
	apiKey: import.meta.env.VITE_TYPESENSE_API_KEY,
	connectionTimeoutSeconds: 2,
});

export { client };
