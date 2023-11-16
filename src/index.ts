import { Hono } from "hono";
import { cache } from "hono/cache";
import { cors } from "hono/cors";
import { ParsedQuery } from "./types";
import { UserNotFoundError, fetchContributionsForQuery } from "./fetch";

const app = new Hono();

app.get(
  "*",
  cache({
    cacheName: "github-contributions",
    cacheControl: "max-age=3600000",
  })
);
app.get("*", cors());

app.get("/", (c) =>
  c.html(
    "this is github-contributions-edge. <a href='#'>Check the document</a>"
  )
);

app.get("/:username", async (c) => {
  const { username } = c.req.param();

  const { format, y } = c.req.query();

  if (format && format !== "" && format !== "nested") {
    return c.json(
      {
        error: "Query parameter 'format' must be 'nested' or undefined",
      },
      400
    );
  }

  const years = y != null ? (typeof y === "string" ? [y] : y) : [];

  if (
    years.some(
      (year) => !/^\d+$/.test(year) && year !== "all" && year !== "last"
    )
  ) {
    return c.json(
      {
        error: "Query parameter 'y' must be an integer, 'all' or 'last'",
      },
      400
    );
  }

  const query: ParsedQuery = {
    years: years.map((y) => parseInt(y, 10)).filter(isFinite),
    fetchAll: years.includes("all") || years.length === 0,
    lastYear: years.includes("last"),
    format: format as "nested" | undefined,
  };

  try {
    const response = await fetchContributionsForQuery(username, query);
    return c.json(response);
  } catch (error) {
    if (error instanceof UserNotFoundError) {
      return c.json(
        {
          error: error.message,
        },
        404
      );
    }

    new Error(
      `Unable to fetch contribution data of '${username}': ${
        error instanceof Error ? error.message : "Unknown error"
      }.`
    );
  }
});

export default app;
