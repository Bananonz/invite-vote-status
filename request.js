const express = require('express');
const path = require('path')

const BOT_INVITE = 'https://discord.com/oauth2/authorize?client_id=766631717078564886&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FCBAVpzMzFe&scope=bot';

const VOTE = 'https://top.gg/bot/766631717078564886/vote'

app.get('/invite', (req, res) => {
	res.redirect(BOT_INVITE);
});

app.get('/vote', (req, res) => {
	res.redirect(VOTE);
});
