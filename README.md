# Steps to reproduce issue #1113

not a Monorepo project

# 1. cd shared fold

```
pnpm i

pnpm build

pnpm link
```

# 2. cd rs-app

rs-app can start normally

```
pnpm i

pnpm link shared

pnpm dev
```

# 3. cd cra-app

cra-app has a **webpack_require** error

```
pnpm i

pnpm link shared

pnpm start
```
