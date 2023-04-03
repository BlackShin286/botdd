const {
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require('discord.js');
const ayarlar = require('../../ayarlar.json');
const https = require('https');
const fs = require('fs');
const moment = require('moment');
var version = ayarlar['versionbot'];
var img = ayarlar['img'];
module['exports'] = {
    name: 'fashcommand',
    description: 'Sử dụng lệnh nhanh',
    type: 'CHAT_INPUT',
    run: async(_0x36a5x7, _0x36a5x8) => {
        if (!_0x36a5x8['member']['permissions']['has']('ADMINISTRATOR')) {
            return _0x36a5x8['reply']('B\u1EA1n kh\xF4ng c\xF3 quy\u1EC1n \u0111\u1EC3 d\xF9ng l\u1EC7nh n\xE0y!')
        };
        const _0x36a5x9 = new MessageActionRow()['addComponents'](new MessageButton()['setCustomId']('proxy')['setLabel']('Reload Proxy')['setStyle']('SUCCESS')['setEmoji']('💻'), new MessageButton()['setCustomId']('stop')['setLabel']('Stop All Attack')['setStyle']('DANGER')['setEmoji']('🛑'));
        const _0x36a5xa = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('```css\x0A[ SỬ DỤNG LỆNH NHANH ]\x0A```')['setFooter']('\xA9 Developer: HuyXingum8K#4933 | GODSEND', img)['setTimestamp']();
        await _0x36a5x8['reply']({
            embeds: [_0x36a5xa],
            components: [_0x36a5x9]
        });
        _0x36a5x7['on']('interactionCreate', async(_0x36a5x8) => {
            if (!_0x36a5x8['isButton']()) {
                return
            };
            if (_0x36a5x8['customId'] === 'proxy') {
                var _0x36a5xb = 'https://cdn.discordapp.com/attachments/934796401760669769/1033391431194247240/proxies.txt';
                const _0x36a5xc = fs['createWriteStream']('proxies.txt');
                fs['writeFileSync']('proxies.txt', ' ');
                const _0x36a5xd = https['get'](_0x36a5xb, function (_0x36a5xe) {
                    _0x36a5xe['pipe'](_0x36a5xc);
                    console['log'](`${'['}${moment['utc'](Date['now']())}${'] [*] C\u1EADp nh\u1EADt th\xE0nh c\xF4ng c\u01A1 s\u1EDF d\u1EEF li\u1EC7u proxy.'}`)
                });
                const _0x36a5xa = new MessageEmbed()['setTitle'](version)['setColor']('RANDOM')['setDescription'](`${'Proxy \u0111\u01B0\u1EE3c c\xE0i \u0111\u1EB7t trong t\u1EADp tin: **'}${_0x36a5xc['path']}${'**'}`)['setFooter']('\xA9 HuyXingum8K#4933', img)['setTimestamp']();
                const _0x36a5xf = require('util')['promisify'](setTimeout);
                await _0x36a5xf(1000);
                await _0x36a5x8['reply']({
                    embeds: [_0x36a5xa],
                    ephemeral: true
                })
            };
            if (_0x36a5x8['customId'] === 'stop') {
                var _0x36a5x10 = require('child_process')['exec'];
                _0x36a5x10(`${'taskkill /f /im node.exe'}`, (_0x36a5x11, _0x36a5x12, _0x36a5x13) => {});
                console['log']('D\u1EEBng l\u1EA1i t\u1EA5t c\u1EA3 cu\u1ED9c t\u1EA5n c\xF4ng:' + _0x36a5x8['guild']['id']);
                const _0x36a5xa = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('```css\x0A[ T\u1EA4T C\u1EA2 CU\u1ED8C T\u1EA4N C\xD4NG \u0110\xC3 D\u1EEANG L\u1EA0I ]\x0A```')['setFooter']('\xA9 Developer: HuyXingum8K#4933 | GODSEND', img)['setTimestamp']();
                const _0x36a5xf = require('util')['promisify'](setTimeout);
                await _0x36a5xf(1000);
                await _0x36a5x8['reply']({
                    embeds: [_0x36a5xa],
                    ephemeral: true
                })
            }
        })
    }
}