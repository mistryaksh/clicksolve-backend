declare module "express-unless" {
  import { RequestHandler } from "express";

  interface UnlessOptions {
    path?: string | string[];
    method?: string | string[];
  }

  interface Unless {
    (options?: UnlessOptions): RequestHandler;
  }

  export default function unless(options?: UnlessOptions): Unless;
}
