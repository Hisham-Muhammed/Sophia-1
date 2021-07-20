/* Copyright (C) 2020 ameer-kallumthodi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');

const Language = require('../language');
const Lang = Language.getString('filters');

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));

Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if (!!message.mention && message.mention[0] == '919946432377@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/Mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['name entha','Helo','King','Kooi','Tuttu','Azaru','Ramos','Tentacion','baby','Loveee','Neymar','umma','Music','Kurup','Friend','Rose','aara','Alone','ayilla','bie','Chiri','colony','enth','Bye','Chodich poyavan umbi ','Chunken','entha','Fuck','Goal','Hambada','Kanja','Killedi','DD','kuthirappavan','mathi','Meeting','mier','moonji','Name','Oh no','pever','Potta','Serious','Soldier','Sry','Subscribe','thottu','Va','Vada','vimanam','sorry','nanban','Lala','Smile','ghost','La be','Sed','Dead','Devil','Uff','Legend','Entry','music','Fek','Psycho','Town','Pwoli','Good night','Uyir','Malang','Bad','Boss','Kichumown pewer','Thamasha','big fan','charlie','gd n8','kar98','love u','Love u','Endi','endi','noob','Noob','Poweresh','Perfect ok','perfect ok','power','saji','single','waiting','Myr','myr','Malappuram','uyir','thug','avastha','Moodesh','King','Kichumown terror','sketched','Cr7','Z aayi','manasilayo','Hi','Hlo','Poda','nirtheda','Aarulle','Cr7 back','Portugal','ennitt','Boss','Haters','ayn','Kgf','😎','Akshay uyir','sed bgm','Messi','Hehe','hehe','Set aano','set aano','Bot myren','Venda','venda','chadhi','Chadhi','Hbday','hbday','Bot','R yyi padicho','Myre','myre','Oompi','oompi','parayatte','Fresh','fresh''Mesh bgm','Ok da','ok da','Feel aayi','feel aaayi','scene','Ok bei','ok bei','Da','Kozhi','kozhi','adi','Adi','kali','Kali','thantha','Thantha','Aysheri','aysheri','thund','Thund','thot','Thot','Sneham','pm','Pm','paatt','Paatt','njan','Njan','life','Life','Killadi','killadi','good bye','Good bye','evide','Evide','achan','Achan','kunna','Kunna','broken','Broken','why','Why','enth patti','Enth patti','pani','Pani','padicho','Padicho','paad','Paad','Chatho','chatho','lover','Lover','nanayikoode','Nanayikoode','die','hate','Hate','Lamiya engineering','lamiya engineering','nallath','Nallath','Neymer','neymer','Njr','njr','patti','Patti','poora','Poora','Rohit','rohit','thall','Thall','Theri','theri','potte','Potte','Pinky','Caption','caption','onn poyi','Onn poyi','problem','Problem','Ameer','ameer','Suhail','Mathy','BGM','Die','Jd','Loveu','Veeran','Waiting','ano','ara','Ara','alone','bad boy','brokenlove','care','chunke','comedy','devadha','ekk','fd','free','gdmng','gdngt','group','ha','i am back','ijathi','jd','kadhal','kerivaa','kiss','kukku','line','lucifer','machan','Chetta','Per','massbgm','Mass','matam','may i','mindathe','my area','mylove','njn','padakam','polika','racal','rasool','rashmika','return','sneham','sulthan','thayirmulak','vada','wow','Thalapathy','Pikachu','Aliya','Leopucha','Poompatta gunda','Bgm','En nenjil','evde','Frnd','Game','Hy','Hoi','Yaar','Kadhali','king','Paavam','Pewer','pewer','Power','Pranayam','sed','Umma','Vava','Kunju','💪','🤣','Sis','Bairavaa','bgm','Love tune','Mohanlal','Singapenne','Single','Jocker','1 vs 1 vada','1','alive','Aliyo','Ardra','Area','Ayn','bot','Chathi','Chunk','Chunks','cr7','Cry','Dai','Dora','Entry bgm','Gd mng','Gd ngt','Hloo','Kanjan','Ikkachi','Kanjav','Kevin','Kundan','kundan','manath','messi','My love','Nalla kutty','Nanban','Nanni','Nishal','Njn vera','Oh','Ok','Over','Pala shaji','Pever','Pinnallah','Poli','Potte','Power varatte','Re entry','Sad','sad','T','Sahva','Scene','sed','Saji','Seth po','sis','Song','song','Supper','Vidhi','Baby','Music pranthan','Kenzo','kenzo','Kenzoo','Ashkar','per','Hbd','Mad','Blackzue','Nallakutti','Enthada','Akhil','Love','Fsq','Nanbiye','Iblees','Rashmika','Kutty','Arakkal iblees','Althaf','Sayip','thamasha','Edi','Muth','Muthe','Omb','2','Mood','Ok bye','Eda','Track maat','Chaya kudicho','photo','Set','Poote','Chathy','Aara','ayye','Ayyo','Bass bgm','Bgm id','Bhasi','Biscket','Chirikano','Chunnk uyr','ok','Umbi','da','Csk','ee','Ellarum ede','Etha cheyya','Entha','Fan','ff','grp','Kanapi','Kanaran','Kemam','kk','left','Lo','Loo','Lub u','muthe','My god','oombi','over','Paat','Panni','Podai','Athan','Ayin','Ayyo ayyo','BGM','Blooduyir','Bloods','Pooda','Pora','Poyeda','Rasheed','Sed aayi','Sed tune','sed','Super','thayoli','Alone','Thug','Vaa','welcome','Wait']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));

