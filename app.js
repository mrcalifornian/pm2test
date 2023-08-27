import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
dotenv.config();

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

bot.on("polling_error", (ctx) => {
  console.log(ctx);
});

bot.on("message", (ctx) => {
  console.log(ctx);
  bot.sendMessage(ctx.from.id, "Dude I'm alive, still");
});
