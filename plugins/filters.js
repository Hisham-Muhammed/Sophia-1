/* Codded by @Ravindu Manoj
Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Whats bot - Ravindu Manoj
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config');
const jid = Config.DISBGM != false ? Config.DISBGM.split(',') : [];

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
        if (!!message.mention && message.mention[0] == '919207866848@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/Mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['name entha','Helo','King','Kooi','Tuttu','Stanly','Azaru','Ramos','Tentacion','baby','Loveee','help','nirthada','Neymar','umma','Music','Kurup','Friend','Rose','aara','Alone','Admin','Carlos bomb squad','Umma','Apuz','Askar','SRFX','Sabeeh','Salman','Afnas','Jaseel','devil carlos','Enthupatti','Group power','Hii','I am in love','Love','Daa','set','Nandhana','Nissaram','Njnum niyum','Ok da','Rules','adich','alive','apuz ser','arum alla','ashiq','carlos','chaya','corona','criminal','da','devil','fans','first','job','kallip','kalyanam','kanja','kazhicha','kazhik','kazhingh','ketta','kidanno','kollanam','kozhi','lahari','makeup','mine','missing','mood','morning','munji','mwoolusey','night','orumich','over','padipikaan','parayatt','patti','pedi','penninay','po','poda','podi','poo','pott','pova','pranayam','prayojanam','preshnam','rakshasi','range','sarasu','sathyam','scene','sed','set anoo','setta','shri','sneham','sreekutty','thallu','tym','uff','Amma','undakanne','uranghadi','vanda','vandada','vann','vilichaal','waiting','you','ayilla','bie','Oo','Chiri','Criz','Thala','Manasilayo','Dovp','dovp','Ashik','Alamb','Aloo','Bhavani','Ayin','Birthday','Broken','Bye','Chava','Chiri','Chirikeda','Chirikkana','Comedy','Daaa','Ellarum','Ente','Fine','Gd nyt','Halo','Idi','Ithara','Ithetha','Iyyo','Ka','Kollam','Left','Mood','Ninne kond','Ninne','Oh no','Over','Pandaram','Patikkalle','Pattula','Pha','Pottan','Re entry','Rowdy','Silence','Smile','Thug','Vali','Wow','Ban','Chunkz','Edger','Entertain','Eyy','Kazhap','Mood','Padip','Vanda','Warning','apple','arum illa','avishym','carefull','chetta','chill','choora','chuma','chunk orap','come on','control','divasam','eda','ego','ejathi','errikum','glamour','kannano','kittila','kshemikanam','kudi poyo','makkaley','mandan','mariage','munb','muth','muttikkoo','nadakunathu','nayintta','ne arada','ninghal','patti','onnu poda','onnum ariyilla','poda patti','Good morning','Who is pablo','Subin','Myr','Enjoy','colony','enth','entha','Fuck','Goal','Exam','ayye','nirth','kunda','Kunda','Rip','hack','pvr','e','pro','dialogue','thamsha','Ayn','Cry','cry','thayoli','7','Repost','video','Over','per','Ready','like','poyi','Macha','macha','0','o','kick','mark','Mark','friend','died','4','5','pora','Show','Hambada','Kanja','Killedi','Pubg','Omg','kuthirappavan','mathi','Meeting','mier','moonji','Name','Oh no','pever','Potta','Serious','Soldier','Sry','Subscribe','thottu','Va','Vada','vimanam','3','nan','sad','chathu','delete','scene','Fake','vaa','bro','kaztro','Bgm','tha','a','lol','ban','ithara','poda','baby','hloo','lo','10','photo','lub','6','Kaztro','subscribe','support','Support','ichu','b','INR','mm','lokam','ithara','oh','andi','Mass','sorry','nanban','Lala','Smile','ghost','La be','Sed','Uff','Legend','music','Fek','Psycho','Town','Pwoli','Uyir','Malang','Bad','Boss','Thamasha','big fan','charlie','gd n8','kar98','love u','Endi','endi','noob','Poweresh','Perfect ok','perfect ok','power','saji','single','waiting','Myr','myr','Malappuram','uyir','thug','avastha','Moodesh','sketched','Cr7','Z aayi','manasilayo','Hi','Hlo','Poda','nirtheda','Aarulle','Cr7 back','Portugal','ennitt','Boss','Haters','ayn','Kgf','😎','Akshay uyir','sed bgm','Messi','Hehe','hehe','Set aano','set aano','Bot myren','Venda','venda','chadhi','Chadhi','Hbday','hbday','Bot','R yyi padicho','Myre','myre','Oompi','oompi','parayatte','Fresh','fresh','Ok da','ok da','Feel aayi','feel aaayi','scene','Ok bei','ok bei','Da','Kozhi','kozhi','adi','Adi','kali','Kali','thantha','Thantha','Aysheri','aysheri','thund','Thund','thot','Thot','Sneham','pm','Pm','paatt','Paatt','njan','Njan','life','Life','Killadi','killadi','good bye','Good bye','evide','Evide','achan','Achan','kunna','Kunna','broken','Broken','why','Why','enth patti','Enth patti','pani','Pani','padicho','Padicho','paad','Paad','Chatho','chatho','lover','Lover','nanayikoode','Nanayikoode','die','hate','Hate','Lamiya engineering','lamiya engineering','nallath','Nallath','Neymer','neymer','Njr','patti','Patti','poora','Poora','Rohit','rohit','thall','Thall','Theri','theri','potte','Potte','Pinky','Caption','caption','onn poyi','Onn poyi','problem','Problem','Ameer','ameer','BGM','Die','Jd','Loveu','Veeran','Waiting','ano','ara','alone','bad boy','brokenlove','care','chunke','comedy','devadha','ekk','fd','free','gdmng','gdngt','group','ha','i am back','ijathi','jd','kadhal','kerivaa','kiss','kukku','line','lucifer','machan','massbgm','matam','may i','mindathe','my area','mylove','njn','padakam','polika','racal','rasool','rashmika','return','sneham','sulthan','thayirmulak','vada','wow','Thalapathy','Pikachu','Aliya','Leopucha','Poompatta gunda','Bgm','En nenjil','evde','Frnd','Game','Hy','Kadhali','king','Paavam','Pewer','pewer','Power','Pranayam','Umma','Vava','Kunju','💪','🤣','Sis','Bairavaa','Love tune','Mohanlal','Singapenne','Single','Jocker','1 vs 1 vada','1','Aliyo','Ardra','Area','Ayn','bot','Chathi','Chunk','Chunks','cr7','Cry','Dai','Dora','Entry bgm','Gd mng','Gd ngt','Hloo','Kanjan','Ikkachi','Kanjav','Kevin','Kundan','kundan','manath','messi','My love','Nalla kutty','Nanban','Nanni','Nishal','Njn vera','Oh','Ok','Over','Pala shaji','Pever','Pinnallah','Poli','Potte','Power varatte','Re entry','Sad','Sahva','Scene','MJFX','Saji','Seth po','sis','Supper','Vidhi','Baby','Music pranthan','Kenzo','kenzo','Kenzoo','Ashkar','Hbd','Mad','Blackzue','Nallakutti','Enthada','Akhil','Love','Fsq','Nanbiye','Iblees','Rashmika','Kutty','Arakkal iblees','Althaf','Sayip','thamasha','Edi','Muth','Omb','2','Mood','Ok bye','Eda','Track maat','Chaya kudicho']
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
    if(Config.BGMFILTER){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '918921483992@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./stickers/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Mm','power','sad','anthas','failed','alla','chunk','marichu','think','cheyalle','mention','mama','set','eda','umma','police','aysheri','vannu','love','manasilla','uyir','oombi','important','sed','chathu','girl','poweresh','ooo','bye','pedicho','number','ok','pwoli','chiri','vibe','shut','saved','mood','shaad','pidi','song']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

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
