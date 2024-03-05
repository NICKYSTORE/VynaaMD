import fetch from "node-fetch";
import axios from "axios"

let handler = async (m, { conn, text, usedPrefix, command }) => {
   if (!text) throw `*example:* ${usedPrefix + command} https://vt.tiktok.com/xxxxxxx`
   conn.sendMessage(m.chat, {
		react: {
			text: '🕑',
			key: m.key,
		}
	})
      let result = await fetch(`https://api.miftahganzz.my.id/api/download/tiktokv2?url=${text}&apikey=skynkt`)
    let res = await result.json()
      conn.sendFile(m.chat, res.data.nowm, 'error.mp4', '', m)
}
handler.help = ['tiktok2 *⧼url⧽*'];
handler.tags = ['downloader'];
handler.command = /^(tiktok2|tt2)$/i;
handler.limit = true;
handler.group = false;

export default handler;