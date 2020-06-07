import { AlosaurOpenApiBuilder } from "https://deno.land/x/alosaur/openapi/mod.ts";
import { container } from "./container.ts";
import { IP, APP_PORT } from "../env.ts";

AlosaurOpenApiBuilder
  .create(container)
  .addTitle("Call2Text Api")
  .addVersion("0.0.1")
  .addDescription(`OpenApi generated doc API on (${IP}:${APP_PORT})`)
  .addServer({
    url: IP,
    description: "Call2Text Api",
  })
  .saveToFile("./api.json");
