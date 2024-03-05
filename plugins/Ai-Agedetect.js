import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `*reply/send ur image with .${command}*`
conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	})
let js = await fetch(`https://api.lolhuman.xyz/api/agedetect?apikey=${global.lol}&img=${encodeURIComponent(url)}`)
    let has = await js.json()
    await m.reply('Hasil Deteksi Usia Dari Gambar Tersebut Adalah ' + has.result + ' Tahun')
  	}

handler.help = ['agedetect']
handler.tags = ['ai','internet']
handler.command = /^(agedetect|usia)$/i

handler.limit = true

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
