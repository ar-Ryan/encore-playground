import { registerGateways, registerHandlers, run, type Handler } from "encore.dev/internal/codegen/appinit";

import { get as hello_getImpl } from "../../../../hello/hello";


const gateways: any[] = [
];

const handlers: Handler[] = [
    {
        service:   "hello",
        name:      "get",
        handler:   hello_getImpl,
        raw:       false,
        streaming: false,
    },
];

registerGateways(gateways);
registerHandlers(handlers);

await run();
