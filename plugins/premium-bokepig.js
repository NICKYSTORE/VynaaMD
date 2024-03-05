import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.saipulanuar.my.id/api/bokepig?apikey=9vxw5GqJ'
	conn.sendMessage(m.chat, {
		react: {
			text: '♻️',
			key: m.key,
		}
	})
	await conn.sendMessage(m.chat, {
			video:await(await fetch(url)).buffer(),
			caption: "*Here ur porn.*"
		}, { quoted: m })
}
handler.command = /^(bokepig)$/i
handler.tags = ['nsfw','menuprem']
handler.help = ['bokepig']
handler.register = true
handler.premium = true
handler.limit = true

export default handler