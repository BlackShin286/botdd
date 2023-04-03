const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
const ayarlar = require('../../ayarlar.json');
var img = ayarlar.img;

module.exports = {
    name: 'buyplan',
    description: 'PLAN DDOS & SMS',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
    await interaction.deferReply({
      ephemeral: false,
    });

    const embed = new MessageEmbed()
      .setDescription(
        ` MUA PLAN DDOS - SMS LIEN HE KHUY\n\n📬SMS: 15K/1 MONTH\n❄️BASIC : **k/1 MONTH\n 🌌VIP : 20k/1 MONTH\n\n`
      )
      .setColor("RANDOM")  
      .setFooter('© Copyright: Huynh Kiem Huy ', img)
      .setTimestamp();
      interaction.editReply({ embeds: [embed] });
    }
}