import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'
import axios from 'axios';

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `*Send or reply image use .${command}*`
let media = await q.download()
let url = await uploadImage(media)
  conn.sendMessage(m.chat, {
    react: {
      text: '💥',
      key: m.key,
    }
  });

  let apiUrl = `https://api.neoxr.eu/api/remini2?image=${url}&apikey=${global.neoxr}`;
  try {
    let { data } = await axios.get(apiUrl);
    let result = data.data;

    conn.sendFile(m.chat, result.url, '', '*ini kak*', m);
		               } catch (error) {
    console.error(error);
    m.reply(`Failed to progresing. Please try again later: ${error}`);
  }
}

handler.help = ['hd'];
handler.tags = ['aiv2'];
handler.command = /^(hd|hade)$/i;
handler.limit = 5;

export default handler;