# github-contributions-edge

[github-contributions-api](https://github.com/grubersjoe/github-contributions-api)를 Cloudflare Workers 등에서 구동할 수 있도록 Hono를 이용하여 포팅한 버전입니다.

## requirements

권장사항입니다. 아래의 환경에서 작성했습니다.

- [Cloudflare Workers](https://workers.cloudflare.com/)
  - [Hono](https://hono.dev)가 지원하는 런타임이라면 사용 가능하지만, 추가 작업이 필요할 수 있습니다.
- pnpm

## Usage

```bash
# Install dependencies
pnpm install

# Development Locally
pnpm dev

# Deployment to Cloudflare Workers
pnpm deploy
```

## License

많은 부분이 [github-contributions-api](https://github.com/grubersjoe/github-contributions-api)를 기반으로 구성되었습니다.
