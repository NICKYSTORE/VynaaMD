import fetch from "node-fetch"
let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
text,
    args
}) => {
if (!Number(text)) return m.reply("input number")
        await m.reply(wait)
        let res = await fetch('https://civitai.com/api/v1/models')
        let sky = await res.json()
        let line = sky.items[text].modelVersions[0].images[0].meta.prompt
        await m.reply(line)
}
handler.help = ["civitai"]
handler.tags = ["aiv2"]
handler.command = /^(civitai)$/i
handler.register = true
handler.premium = false
handler.limit = true

export default handler