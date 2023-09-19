import { } from 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import axios from 'axios';

const client = new Client({
    intents:
        [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        
        ]
});

const weatherApiKey = process.env.weather_Key

client.on('messageCreate', async (message) => {
    if (message.content.startsWith('!weather')) {
      const args = message.content.split(' ');
      if (args.length < 2) {
        message.reply('Please specify a city for weather information.');
        return;
      }
  
      const city = args.slice(1).join(' ');
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`
        );
  
        const weatherData = response.data;
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;
  
        message.reply(`Weather in ${city}: ${description}, Temperature: ${temperature}°C`);
      } catch (error) {
        console.error(error);
        message.reply('An error occurred while fetching weather information.');
      }
    }
  });


client.on('interactionCreate', (command) => {
    console.log(command);
    command.reply('pong!!');
})

client.login(process.env.TOKEN);