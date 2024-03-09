# Vehify Nuxt 3 Starter

## some additional notes from yours truly

**how nuxt works:** Layout --> Page --> Component

| File               | Description                          |
| ------------------ | ------------------------------------ |
| assets/css         | css                                  |
| components         | reusable components                  |
| layouts            | page layouts                         |
| lib                | custom libraries                     |
| pages              | app pages                            |
| public             | publicly available files             |
| .gitignore         | files ignored by git                 |
| .prettierrc        | prettier config                      |
| app.config.ts      | custom app config                    |
| bun.lockb          | automatically created lock file      |
| components.json    | automatically created shadcn/ui file |
| eslintrc.json      | eslint config                        |
| nuxt.config.ts     | nuxt.js config                       |
| package.json       | dependencies and scripts             |
| README.md          | this file                            |
| tailwind.config.ts | tailwindcss config                   |
| tsconfig.json      | typescript config                    |

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
