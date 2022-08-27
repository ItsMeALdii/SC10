const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

//api
global.xteam = 'apivproject'
global.lolhuman = 'yourkey'

// Other
global.owner = ['62895331245483']
global.premium = ['62895331245483']
global.ownername = '𝙞𝙩𝙨𝙈𝙚𝘼𝙇𝙙𝙞𝙞 ★'
global.botname = 'ALdiixBotZ'
global.packname = '© 𝘼𝙇𝙙𝙞𝙞 𝙞𝙨 𝙃𝙚𝙧𝙚 ★'
global.gc = 'https://github.com/ItsMeALdii'
global.linkyt = 'https://youtube.com/channel/UCKHu6PJcxYcbWBiBV0UPOlA'
global.linkgc = 'https://chat.whatsapp.com/Fq0TKkkm8iMKgdcQic2aX3'
global.limitawal = '10'
global.author = '@req_aldiee\n@foxxBot'
global.sessionName = 'sessionya'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⌕'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus 𝙞𝙩𝙨𝙈𝙚𝘼𝙇𝙙𝙞𝙞 ★',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://telegra.ph/file/9967164c85976f551bb05.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
