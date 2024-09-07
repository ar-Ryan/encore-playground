import { registerHandlers, run, type Handler } from "encore.dev/internal/codegen/appinit";
import { get as getImpl } from "../../../../hello/hello";

const handlers: Handler[] = [
    {
        service:   "hello",
        name:      "get",
        handler:   getImpl,
        raw:       false,
        streaming: false,
    },
];

registerHandlers(handlers);
await run();
