# Activist Handbook

## Deploy using Cloudflare Pages

### Build & deployment settings

Production branch: main
Preview branches: dev
Build command: yarn run build
Build output directory: .vitepress/dist

## Environment variables

NODE_VERSION: 14
ACTIONNETWORK_API_KEY: secret

## Dynamic image

Common screen sizes:

- **360px wide:** img sizes 336 1x, 672 2x
- **In between** img sizes 420, 504
- **375px wide** img sizes 702 2x
- **414px wide** img sizes 780 2x
- **In between:** img sizes 840, 899, 959, 1018, 1078, 1138, 1197, 1257, 1316
- **Max:** img size 688 1x, 1376 2x

The image width sizes above have been derrived from the most common screen sizes of smartphones (looking at the actual image width on those screens with 1x and 2x pixel densities). The 'in between sizes' fill in the gaps.
