import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${audio.getRandom()}`, "random1.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(colmek|desah)$/i;
handler.command = new RegExp();
handler.premium = true
export default handler;

const audio = [
	"./vn/random1.mp3",
];