# Chatr.tech

A slack style chatbot that uses OpenAI's GPT-3 API to generate responses.

## What it does

The app defines different "bots" to chat with. Each bot has it's own personality and style of responses. The app uses OpenAI's GPT-3 API to generate responses for the bot.

---

## Install the project

- Clone the project onto your local machine

```bash
git clone https://github.com/brandtam/sk-chatr.git
```

- Install the packages with your favorite package manager (pnpm)

```bash
pnpm install
```

## Setup the OpenAI API

- Create an account on [OpenAI](https://platform.openai.com/)
- Create an API key
- Create a `.env` file in the root of the project
- Add your API key to the `.env` file as follows:

```bash
OPENAI_API_KEY=your_api_key_that_you_copied_from_openai
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

- Start the server locally

```bash
pnpm dev
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

## Deploying to Production

Since this specific app uses Vercel Edge Functions you will need to deploy to [Vercel](https://www.vercel.com).

- Copy the OpenAi API key to the projects environment variables on Vercel.

## License

[MIT](LICENSE.md)
