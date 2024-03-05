import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
let res = await fetch(`https://api.ibeng.tech/api/other/cersex?apikey=TuQZcAniWy`)
let hasil = await res.json()
 m.reply(` 
*Judul:* ${hasil.data.title}
*Tanggal:* ${hasil.data.tanggal}

    ${hasil.data.cerita}`.trim())
    }  
handler.help = ['cerpensex']
handler.tags = ['fun','internet']
handler.command = /^(cerpensex|cersex)$/i
export default handler