# github-contributions-edge

A ported version of [github-contributions-api](https://github.com/grubersjoe/github-contributions-api) using [Hono](https://hono.dev) to run on Cloudflare Workers, etc.

## requirements

This is the recommended development environment.

- [Cloudflare Workers](https://workers.cloudflare.com/)
  - You can use any [runtime is supported by Hono](https://github.com/honojs/hono/tree/main/src/adapter), but it may require additional work.
- pnpm

## Usage

```bash
# Install dependencies
pnpm install

# Develop Locally
pnpm dev

# Deployment to Cloudflare Workers
pnpm run deploy
```

## License

Much of the code is taken from [github-contributions-api](https://github.com/grubersjoe/github-contributions-api). Thanks to [grubersjoe](https://github.com/grubersjoe) for the great work.
