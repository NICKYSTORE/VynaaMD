import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*example:* ${usedPrefix}${command} japanese teen`
    let res = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${global.lolkey}&query=${text}`)
  let res2 = await res.json()
  let cap = '*use:* .xnxxdl ⧼link⧽ for download your porn\n\n'
  for (let json of res2.result) {
      cap += `• *Title:* ${json.title}
◦ *Views:* ${json.views}\n◦ *Author:* ${json.uploader}\n◦ *Link:*\n${json.link}\n\n`
  	}
  	try {
  	conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	})
  conn.sendMessage(m.chat, {
text: cap,
contextInfo: {
externalAdReply: {
title: `Bro stop f*ckng & stay halal.`,
body: "",
thumbnailUrl: "https://link.sazumiviki.me/wSKumq",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
   } catch (e) {
    console.log(e)
    conn.reply(m.chat, '*Sorry there was an error accepting the request.*', m)
  }
}
handler.help = ['xnxxsearch'].map(v => v + ' *⧼query⧽*')
handler.tags = ['internet','premium']
handler.command = /^(xnxxsearch)$/i
handler.register = true
handler.premium = true
handler.limit = true

export default handler