import 'dotenv/config';
import Client from './client/client';

const bot = new Client(process.env.TOKEN);

bot.start();
