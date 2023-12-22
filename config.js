/*
    • Created & Base By ArxzyDev
    • Jual Sc? Neraka Paling Bawah
    • My Contact https://wa.me/62882108289600 (qyunne)
    
    https://wa.me/6281255642719 (RiellOFFC) 
    apikey premium Lolhuman By RiellIffc
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '09b723b1fee8877ff7a8c347' // apikey premium Lolhuman By riellOffc Jangan di apa apain
global.ibeng = 'tamvan' // FREE APIKEY IBENG
global.rosekey = 'cba86fac49e37d63f9bd4561' // ROSE
global.keyai = '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' // https://platform.openai.com/account/api-keys

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'xCez-ᴍᴅ'
global.namaowner = 'Apri'
global.wagc = "-"

//—————「 Setting Owner 」—————//
global.owner = ['6285748600473']
global.nomerowner = '6282191563771'
global.premium = ['6281255642719','6285748600473']

//—————「 Set Wm 」—————//
global.packname = 'xCez-ᴍᴅ'
global.author = 'Bot: Apri x Mincez'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 10k Permanen* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 5k Permanen',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/7c134f718f8babd2185a1.png'
global.link = 'https://github.com/foursbill'
global.thumb = fs.readFileSync('./media/koneko.jpg')
global.logo = fs.readFileSync('./media/logo.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
