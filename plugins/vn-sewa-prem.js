import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${baka.getRandom()}`, "sewabot.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(sewabot|sewa|premium|prem)$/i;
handler.command = new RegExp();

export default handler;

const baka = [
"./vn/sewabot.mp3",
]