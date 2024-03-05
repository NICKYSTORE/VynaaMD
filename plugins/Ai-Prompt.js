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
let media = await q.download()
let url = await uploadImage(media)
let res = await fetch(`https://api.itsrose.life/image/stable/prompter?url=${url}&apikey=${global.rose}`)
  let res2 = await res.json()
  let cap = `*Result Prompt:*\n${res2.result.prompt}`
  m.reply(cap)
  	}
handler.help = ['prompt']
handler.tags = ['ai']
handler.command = /^(prompt)$/i
handler.register = true
handler.premium = false
handler.limit = true

export default handler