# Discord-Weather-Bot

# Discord Bot for Weather Information

## Setting Up Required Dependencies

- We start by importing the necessary modules:
  - `discord.js`: This library provides functionality for interacting with the Discord API.
  - `axios`: Axios is a promise-based HTTP client for making HTTP requests.

## Creating a Discord Client and Variables

- We create a new instance of the Discord Client using the `discord.js` library. This client will be used to interact with the Discord API.
- We define two variables:
  - `token`: This variable should be replaced with your Discord bot's token obtained from the Discord Developer Portal.
  - `weatherApiKey`: This variable should be replaced with your OpenWeatherMap API key, which is used to fetch weather data.

## Setting Up Event Listeners

- We use the `client.on` method to set up event listeners. Two main events are handled:
  - `ready`: This event is triggered when the bot has successfully logged in and is ready to start receiving commands. We log a message to the console to indicate that the bot is online.
  - `messageCreate`: This event is triggered whenever a message is sent in a server where the bot is present. We use this event to listen for commands.

## Handling the `!weather` Command

- Inside the `messageCreate` event handler, we check if the message content starts with the `!weather` command.
- We split the message content into an array of words using `split(' ')` and store it in the `args` variable.
- We check if the `args` array contains at least two elements (the command itself and the city name).
- If there are fewer than two elements, we reply to the user, asking them to specify a city.

## Fetching Weather Data

- We use the `axios` library to make an HTTP GET request to the OpenWeatherMap API. We pass in the city name and the API key as part of the URL.
- The OpenWeatherMap API returns weather data in JSON format, which we store in the `weatherData` variable.
- We extract the temperature and weather description from the JSON response.

## Responding to the User

- We use the `message.reply()` method to send a reply to the user in the same channel where the command was issued. We include the weather information in the reply, including the city name, weather description, and temperature in Celsius.

## Error Handling

- If any errors occur during the API request or response handling, we catch them in a try-catch block. In case of an error, we log the error to the console and reply to the user with an error message.

## Logging In the Bot

- Finally, we log in the bot using its token with `client.login(token)`.

## Running the Bot

- You can start the bot by running the script with Node.js using the `node weather-bot.js` command.

Now, when you invite this bot to your Discord server and use the `!weather` command followed by a city name, the bot will fetch and display the current weather information for that city.
For example - !weather New York

# Discord Bot: Ping Pong Bot

## Introduction

This Discord bot, known as the "Ping Pong Bot," is a simple example of a Discord bot built using the `discord.js` library in Node.js. The bot listens for messages in a Discord server and responds with a "Pong!" message whenever it detects a message containing the word "ping."

## How It Works

The bot operates as follows:

1. **Setting Up Required Dependencies**

   - The bot is created using the `discord.js` library, which provides functionality for interacting with the Discord API.

2. **Configuring the Bot**

   - You need to replace `'YOUR_BOT_TOKEN_HERE'` with your actual Discord bot token, which you can obtain from the Discord Developer Portal when you create a bot.

3. **Creating a Discord Client**

   - A new instance of the Discord Client is created with specific intents (GUILDS and GUILD_MESSAGES) to listen for server and message events.

4. **Event Listeners**

   - The bot sets up two event listeners:
     - `ready`: This event is triggered when the bot successfully logs in and is ready to start receiving events. It logs a message to the console to indicate that the bot is online.
     - `messageCreate`: This event is triggered whenever a message is sent in a server where the bot is present. It checks if the message content is "ping" (case-insensitive).

5. **Responding to "ping"**

   - If the message content is "ping," the bot replies with a "Pong!" message.

6. **Logging In the Bot**

   - The bot logs in using its token with `client.login(token)`.

## Usage

To use this bot, invite it to your Discord server and simply send a message containing "ping." The bot will respond with "Pong!" immediately.

## Configuration

Before using this bot, you need to configure it by replacing `'YOUR_BOT_TOKEN_HERE'` with your actual Discord bot token.

## Deployment

You can deploy this bot to a server or a hosting platform of your choice. Be sure to keep your bot token secure and avoid sharing it publicly or exposing it in your code repositories.

## Conclusion

The "Ping Pong Bot" is a basic example of a Discord bot using `discord.js`. You can use this as a starting point to build more complex bots with additional features and commands.
