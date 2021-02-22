#!/usr/bin/env node

const fs = require('fs');

const { exec, execFile } = require('child_process');

var undef;

function setup(check){
	exec(check, (err,stdout,stderr) => {
		if (err) {
			console.error(err);
		  	return;
		  }
		})
};

if (! fs.existsSync('./adminID')) {setup('touch ./adminID')}; // ID del administrador
if (! fs.existsSync('./token')) {setup('touch ./token')};     // token de su bot creado en @BotFather
if (! fs.existsSync('./userID')) {setup('touch ./userID')};   // IDs de usuarios


// ==============================================================================
const token = fs.readFileSync('./token', 'utf-8'); // <<<<< token de su bot creado en @BotFather

if (token == '') {console.log('aun no ingrsa su toke'); return};

const TelegramBot = require('node-telegram-bot-api'); // <<<<< api de telegram

const bot = new TelegramBot(token, {polling: true}); // <<<<<< ecucha del bot
// ==============================================================================
