//BY VYNAACHAN JAN DI HAPOS KU PUKUL KAU NANTI

let handler = async (m, { groupMetadata, command, usedPrefix, text }) => {
    if (!text) throw `Contoh:
    ${usedPrefix + command} PREMIUM`
    let user = db.data.users
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b = ps.getRandom()
    let c = ps.getRandom()
    let k = Math.floor(Math.random() * 70);
    let x = `${pickRandom(['🎁', '🎁', '🎁',])}`
    let l = Math.floor(Math.random() * x.length);
    let top = `*PEMENANG GIVEAWAY (${text}) ${x}*

*1. ${user?.[a]?.registered ? user[a].name: conn.getName(a)}*
*2. ${user?.[b]?.registered ? user[b].name: conn.getName(b)}*
*3. ${user?.[c]?.registered ? user[c].name: conn.getName(c)}*
`.trim()
    m.reply(top)
}
handler.help = ['giveaway']
handler.tags = ['owner']
handler.command = /^giveaway$/i
handler.group = true
handler.owner = true
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}