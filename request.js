const express = require('express');
const path = require('path')

const BOT_INVITE = 'https://discord.com/oauth2/authorize?client_id=766631717078564886&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FCBAVpzMzFe&scope=bot';

const VOTE = 'https://top.gg/bot/766631717078564886/vote'

const STATUS = 'https://stats.uptimerobot.com/0OzXVf2wQ4'

app.get('/invite', (req, res) => {
	res.redirect(BOT_INVITE);
});

app.get('/vote', (req, res) => {
	res.redirect(VOTE);
});

app.get('/status', (req, res) => {
	res.redirect(STATUS);
});
