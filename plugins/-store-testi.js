// SC BY © VYNAA CHAN
// RECOE WAJIB KASI CREDITS 
// WA: 6282389924037 
// TOKO KEBUTUHAN BOT TERPERCAYA
// HANYA DI SINI
// https://linkbio.co/VLShop
// group
// https://t.me/VynaaMD

let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`_*REAL TESTIMONI 🛍️*_`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  //conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(ometv), [['Next', `/ometv`]],m)
  conn.sendFile(m.chat, pickRandom(ometv), null, `Nih *${name}*`, m)
}
handler.help = ['testimoni']
handler.tags = ['store']
handler.command = /^(testimoni)$/i

handler.premium = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
//GANTI DENGAN FOTO TESTIMONI KALIAN UBAH FOTONYA JADI URL .TOURL
const ometv = [
	'https://telegra.ph/file/9fac7bd8d10e7b6ce9392.jpg',
	'https://telegra.ph/file/512fb3dc111e7f64edd6f.jpg',
]