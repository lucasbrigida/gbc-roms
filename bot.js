var jsdom = require("jsdom")
	,fs = require("fs")
	,colors = require('colors')
	,jquery = fs.readFileSync(process.env.PWD+"/jquery-1.8.2.min.js").toString();
	;

/*****************************
 *
 *	Bot Class
 *
 *	ex: var bot = new Bot();
 *
 *****************************/
this.Bot = function(){

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

