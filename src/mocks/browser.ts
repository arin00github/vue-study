import { setupWorker, SetupWorker } from "msw";
import handler from "./handler";

export const worker: SetupWorker = setupWorker(...handler);
