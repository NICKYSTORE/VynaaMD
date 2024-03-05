let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        global.db.data.users[m.sender]. money = 99999
        global.db.data.users[m.sender].limit = 999999
        global.db.data.users[m.sender].exp = 9999999
        global.db.data.users[m.sender].level = 999999
        m.reply(`_*SUKSES CHEAT TELAH AKTIF GUNAKAN DENGAN BIJAK*_`)
}
handler.command = /^(hesoyam)$/i
handler.owner = true
handler.premium = false
export default handler