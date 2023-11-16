import { getRuntimeKey } from "hono/adapter";

export function isCfWorker(): boolean {
  const key = getRuntimeKey();
  return key === "workerd" ? true : false;
}
