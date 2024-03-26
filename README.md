Inspiration from [Chris Kalmar's video](https://www.youtube.com/watch?v=AVT0FUKcvvk&ab_channel=ChrisKalmar).

![Screenshot](screenshot-1.png)
![Screenshot](screenshot-2.png)

## Stack

This repository utilizes a stack of technologies below, to make sure FE-BE API is typesafe with automatic contract generation:

- Tsoa: a typesafe framework for generating contracts
- Next.js: a React framework for building frontend applications
- Tanstack Query: a powerful data-fetching library
- Tailwind: a utility-first CSS framework
- shadcn/ui: a UI component library

## Architecture

This project consists of a backend utilizing Tsoa and a frontend built with Next.js. Both components are essential for the project's functionality. It is recommended to run them in separate terminal instances.

## Backend

### Install

```bash
cd backend
pnpm install
```

### Development

```bash
pnpm run dev
```

### Unit tests

```bash
pnpm run test
```

## Frontend

### Install

```bash
cd frontend
pnpm install
```

### Development

```bash
pnpm run dev
```

### Integration tests

```bash
pnpm run cy:run
```
