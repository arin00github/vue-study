import { rest } from "msw";
import postList from "./data/posts.json";

const handler = [
  rest.get("/posts", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(postList));
  }),
];

export default handler;
