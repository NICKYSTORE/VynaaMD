import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
let teks = `
________________________________
________________________________
❏ _*PANEL RUN BOT*_
_📮RAM 1 GB CPU 50% RP 5.000 / BULAN_
_📮RAM 2 GB CPU 100% RP 8.000 / BULAN_
_📮RAM 3 GB CPU 125% RP 10.000 / BULAN_
_📮RAM 4 GB CPU 150% RP 13.000 / BULAN_
_📮RAM & CPU UNLIMITED 15.000/ BULAN_
_📮ADMIN PANEL RP 20.000 / BULAN_

Keuntungan beli panel di kami?
➠ Server terjaga 
➠ Jual kualitas bukan asal jual
➠ No mokad di pertengahan
➠ Hemat kuota 
➠ Hemat penyimpanan
➠ Web close? bot tetep on!
________________________________
________________________________
❏ _*LIST HARGA VPS*_
📮 VPS RAM 16GB 8 CORE : 75K
📮 VPS RAM 8GB 4 CORE : 50K
📮 VPS RAM 4GB 2 CORE : 40K
📮 VPS RAM 2GB 2 CORE : 30K
📮 VPS RAM 1GB 1 CORE : 25K

KEUNTUNGAN :
-FREE INSTAL PANEL
-FREE DOMAIN
________________________________
________________________________
❏ _*SEDIA SC BOT WA*_
🌸 VYNAAMD
🌸 EUPHYLLIAMD
🌸 JPM PUSHKONTAK 

KEUNTUNGAN
-FREE UPDATE 
❏ Minat? Silahkan Chat Nomor Owner
https://wa.me/${owner[0][0]}
`.trim()
await conn.sendFile(m.chat, fs.readFileSync('./media/thumbnail.jpg'), ' .thumbnailjpeg', teks, m, false)
}
handler.help = ['allstore']
handler.tags = ['store']
handler.command = /^(storeall|allstore)$/i

export default handler