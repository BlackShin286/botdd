const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
const ayarlar = require('../../ayarlar.json');
var img = ayarlar.img;

module.exports = {
    name: 'help',
    description: 'Xem hướng dẫn',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
    await interaction.deferReply({
      ephemeral: false,
    });

    const embed = new MessageEmbed()
      .setTitle(`${client.user.username}'s Help`)
      .setDescription(
        ` Xin chào **\`${interaction.member.user.username}\`**, tôi là **\`${client.user.username}\`**.  \n\nTôi là một Bot DDoS, được mã hóa bởi: KiemHuy & NhatQuang!! Tham gia [My Community Discord Server](https://discord.gg/arcues) để được giao lưu! \n\n\`💻\`• Lệnh DDoS - *Mua Role Vip để được dùng*\n\n\n\n[✨ My Community Server](https://discord.gg/arcues)\n\n`
      )
      .setColor("RANDOM")  
      .setFooter('© Copyright: Huynh Kiem Huy | Pham Nhat Quang', img)
      .setTimestamp();
      interaction.editReply({ embeds: [embed] });
    }
}