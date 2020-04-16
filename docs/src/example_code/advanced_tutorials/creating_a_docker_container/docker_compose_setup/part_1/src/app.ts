import { Drash } from "https://deno.land/x/drash/mod.ts";

class HomeResource extends Drash.Http.Resource {

  static paths = [
    "/"
  ];

  public GET() {
    this.response.body = 'Hello World!';
    return this.response;
  }
}

const server = new Drash.Http.Server({
  address: ":1447",
  response_output: "application/json",
  resources: [
    HomeResource
  ],
});

server.run();
