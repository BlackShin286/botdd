const db = require('../../database');
module.exports = {
    name: 'prefix',
    description: 'Xem/Lấy prefix',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'prefix',
            description: 'Prefix bạn muốn đổi',
            type: 'STRING',
            required: false,
        }
    ],
    run: async (client, interaction, serverData) => {
        if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply('Bạn không có quyền để dùng lệnh này!');
        const prefixSet = interaction.options.getString('prefix');
        if (!prefixSet) return interaction.reply(`Prefix hiện tại của là: ${serverData.prefix}`);
        await db.set(interaction.guildId, { prefix: prefixSet.toLowerCase() });
        interaction.reply('Bạn đã đổi Prefix thành công!');
    },
};