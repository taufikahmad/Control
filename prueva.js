#!/usr/bin/env node

const fs = require('fs');

const { exec, execFile } = require('child_process');

var undef;


// ==============================================================================
const token = '958291452:AAGFtJKCx92hxJ5U8ZTt-x2A6TGDNLN1xRo'; // <<<<< token de su bot creado en @BotFather

const TelegramBot = require('node-telegram-bot-api'); // <<<<< api de telegram

const bot = new TelegramBot(token, {polling: true}); // <<<<<< ecucha del bot
// ==============================================================================

// Matches /echo [whatever]
bot.onText(/\/comando (.+)/, function onEchoText(msg, match) {
	const resp = match[1];

			exec(resp, (err,stdout,stderr) => {
			if (err) {
				console.error(err);
		  		return;
		  	}
		  	bot.sendMessage(msg.chat.id, stdout);
		  });
	return;
});
