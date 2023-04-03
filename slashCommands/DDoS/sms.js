const { MessageEmbed } = require("discord.js")
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleID = ayarlar.roleID;
var img = ayarlar.img;

module.exports = {
    name: 'spam',
    description: 'ARCUES SPAM SMS !',
    type: 'CHAT_INPUT',
    cooldown: 120,
    options: [
    {
      name: "phone",
      description: " phone cần spam",
      required: true,
      type: "STRING",
    },
  ],

  run: async (client, interaction) => {

    if (!interaction.member.roles.cache.has(roleID))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleID}> mới được dùng lệnh này!`)
            .setFooter({ text: "© Copyright: Huynh Kiem Huy" })
            .setTimestamp(),
        ],
      });   

    const phone = interaction.options.getString("phone")

    var exec = require('child_process').exec
      exec(`python sms.py ${phone} 10000`, (error, stdout, stderr) => {
    });

    console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
        .setImage("https://cdn.discordapp.com/attachments/1072538512102019092/1074753894648905829/5IUl_2.gif")
        .addFields(
          {
            name: '**`👨‍💻 User:`**',
                        value: `${' [ '}${interaction.user.username}${' ] '}`,
                        inline: true
          },
          {
            name: '**`📱 Phone:`**',
                        value: `${' [ '}${phone}${' ] '}`,
                        inline: true
          },
          {
            name: '**`🌀 Amount:`**',
                        value: `${' [ 250 ] '}`,
                        inline: true
          },
          {
            name: '**`🔰 Mode:`**',
                        value: `${' [ FLOPPY ] '}`,
                        inline: true
          },
          {
            name: '**`💸 Plan:`**',
                        value: `${' [ VIP ] '}`,
                        inline: true
          })
          .setFooter('© Copyright : HKiemHuy x PhNhatQuang', img)
          .setTimestamp();
            const countdownEmbed = new MessageEmbed()
              .setColor('RANDOM')
              .setTitle(version)
              .setDescription("Đợi tí nào bro :v")
              .setImage("https://cdn.discordapp.com/attachments/1063461937939230870/1063844969376387223/76cI.gif")
              .setFooter('© Copyright: Huynh Kiem Huy', img)
              .setTimestamp()
            interaction.reply({ embeds: [countdownEmbed] }).then((message) => {
                setTimeout(function () {
                  interaction.editReply({ embeds: [embed] });
                }, 1)
              })
      }
  }