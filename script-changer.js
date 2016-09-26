"use strict";
var processArgv = process.argv;
var readFilePath = "";
var writeFilePath = "";
var fs = require('fs');

setUp();

function setUp(){
	for(var i = 0; i < processArgv.length-1; i++){
		switch(processArgv[i]){
			case "-r" :
				readFilePath = processArgv[i+1];
				break;

			case "-w" :
				writeFilePath = processArgv[i+1];
				break;
		}
	}
	if(readFilePath === ""){
		console.log("ERROR!!読み込み元のファイルがわかりませぬ...");
		process.exit(1);
	}
	if(writeFilePath === ""){
		writeFilePath = "test.bep";
		console.log("WARNING!!書き込み先が設定されませんでした。test.bepに書き込まれます");
	}
	Read();
}

function Read(){
	fs.readFile(readFilePath, 'utf8', function (err, text) {
			var splitedText = text.split('');
			var splitedTextLength = splitedText.length;
			for(var i = 0; i < splitedTextLength;i++){
					switch(splitedText[i]){
						case "+":
							splitedText[i] = "ура";
						break;
						case "-":
							splitedText[i] = "хорошо";
						break;
						case ">":
							splitedText[i] = "了解、響出撃する";
						break;
						case "<":
							splitedText[i] = "そろそろ戻ってもいいかな";
						break;
						case "[":
							splitedText[i] = "響>";
						break;
						case "]":
							splitedText[i] = "bep>";
						break;
						case ".":
							splitedText[i] = "司令官何だい？";
						break;
						case ",":
							splitedText[i] = "司令官に連絡みたいだよ";
						break;
					}
			}
			text = splitedText.join("\n");
			Write(text);
			console.log(err);
			});
}

function Write(data){
	fs.writeFile(writeFilePath, data, function (err) {
			console.log(err);
			});
}

