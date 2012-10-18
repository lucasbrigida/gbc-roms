#!/usr/bin/env node

var bot = require('./bot.js');


/*****************************
 *
 *	Scraping ROMs
 *
 *****************************/
function scrapROMS(errors, window) {
	var $ = window.$;
	console.log("ROM Links → ".yellow, window.location.href.magenta);
	$('td[class="style10"] a').each(function(){
    	console.log($(this).text().red + ' - ' + $(this).attr('href').blue);
    });
}


/*****************************
 *
 *	Load ROM Bot
 *
 *****************************/
var ROMBot = bot.Bot().load("http://www.roxdownload.net/rm/gbc/", scrapROMS);
