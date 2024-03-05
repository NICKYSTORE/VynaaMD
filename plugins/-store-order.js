const handler = async (m, { conn, text, usedPrefix }) => {
    let [pesan] = text.split `|`;

    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya\nContoh : .order Halo kak order sewabot', m);
    if (pesan.length > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m);
    
    let user = global.db.data.users[m.sender];

    let korban = `6282389924037`;
    let spam1 = `*「 ORDER 」*\n\nUntuk : ${pesan}\nDari: *@${m.sender.split`@`[0]}*`;

    conn.reply(`6282389924037@s.whatsapp.net`, spam1, m);

    let logs = `[ ✔️ ] Berhasil mengirim orderan. Mohon tunggu balasan dari owner.`;
    conn.reply(m.chat, logs, m);
};

handler.tags = ['store']
handler.command = /^(order)$/i;
handler.rowner = false;
handler.limit = false;
handler.premium = false;
handler.group = false;
handler.private = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.limit = false;

export default handler;
