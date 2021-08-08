const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*owner Althaf Rahman - http://Wa.me/+919995072954*\n* *\n🔰instagram:- https://www.instagram.com/althaf404_ *            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Althaf Rahman*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Owner Althaf Rahman═💥*\n\n*💘 https://github.com/althaf404/v4*\n*     *\n follow on Instagram- https://www.instagram.com/althaf404_*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*owner Althaf Rahman - http://Wa.me/+919995072954*\n* *\n🔰instagram:- https://www.instagram.com/althaf404_ *            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Althaf Rahman*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Owner Althaf Rahman═💥*\n\n*💘 https://github.com/althaf404/v4*\n*     *\n follow on Instagram- https://www.instagram.com/althaf404_*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }