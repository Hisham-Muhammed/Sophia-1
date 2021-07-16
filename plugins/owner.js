const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎Sophia😎═════╗*\n           \n*⚜═Sophia═⚜*\n\n*owner Hisham - http://Wa.me/+919400374036*\n* *\n🔰instagram:- https://youtube.com/c/ICHUTECH*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Hisham-Muhammed*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Sophia Owner Jishnu═💥*\n\n*💘      *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    
    r_text[1] = "*╔═════😎Sophia😎═════╗*\n           \n*⚜═Sophia═⚜*\n\n*owner Jishnu - http://Wa.me/+917559963483*\n*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Jishnu D CRuz*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Sophia Owner jishnu═💥*\n\n*💘     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

