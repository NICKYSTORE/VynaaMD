import { tiktok } from '../lib/tiktok.js'
import { instagram } from '../lib/instagram.js'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';

export async function before(m, { isPrems }) {
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]

    if (!m.text && m.fromMe)
        return
    if (m.text.startsWith('=>') || m.text.startsWith('>') || m.text.startsWith('.') || m.text.startsWith('#') || m.text.startsWith('!') || m.text.startsWith('/') || m.text.startsWith('\/'))
        return
    if (chat.mute || chat.isBanned || user.banned)
        return

    let text = m.text.replace(/\n+/g, ' ')
    if ((chat.autodownload || user.autodownload) && text.match(regex)) {
        conn.autodownload = conn.autodownload ? conn.autodownload : {}
        let link = text.match(regex)[0]

        if (/^http(s)?:\/\/(www|v(t|m)).tiktok.com\/[-a-zA-Z0-9@:%._+~#=]/i.test(link)) {
            if (!(m.sender in conn.autodownload)) {
                try {
                    conn.autodownload[m.sender] = true
                    let { play } = await tiktok(link)
                    await this.sendFile(m.chat, play, false, link, m)
                } catch {
                    return !0
                } finally {
                    delete conn.autodownload[m.sender]
                }
            }
        }

        if (/^http(s)?:\/\/(www)?.instagram.com\/(p|reel|v)\/[-a-zA-Z0-9@:%._+~#=]/i.test(link)) {
            if (!(m.sender in conn.autodownload)) {
                try {
                    let media = await instagram.v2(link)
                    await this.sendFile(m.chat, media[0].url, false, link, m)
                } catch {
                    return !0
                } finally {
                    delete conn.autodownload[m.sender]
                }
            }
        }

        if (/^http(s)?:\/\/youtube.com\/shorts\/[-a-zA-Z0-9@:%._+~#=]/i.test(link)) {
            if (!(m.sender in conn.autodownload)) {
                try {
                    let { video } = await youtubedl(link).catch(async _=> await youtubedlv2(link))
                    await this.sendFile(m.chat, await video['360p'].download(), false, link, m)
                } catch {
                    return !0
                } finally {
                    delete conn.autodownload[m.sender]
                }
            }
        }

    }
    return !0
}

const regex = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi
const delay = time => new Promise(res => setTimeout(res, time))