#!/usr/bin/env node

var jsdom = require("jsdom")
	,fs = require("fs")
	,colors = require('colors')
	,request = require('request')
	,jquery = fs.readFileSync(process.env.PWD+"/jquery-1.8.2.min.js").toString();
	;

/*****************************
 *
 *	Bot Class
 *
 *	ex: var bot = new Bot();
 *
 *****************************/
function Bot(){

	this.load = function(domain, callback){
		
		console.log("Hit →".yellow, domain.green);

		jsdom.env({
		  html: domain,
		  src: [jquery],
		  done: callback
		});

	}

	return(this);
}



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
var ROMBot = new Bot().load("http://www.roxdownload.net/rm/gbc/", scrapROMS);
