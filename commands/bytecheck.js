exports.run = (client, message, args) => {
if(!args){
message.reply("아무말이라도 적어주셔야 됩니다!")
}else{
var WBOT_0x2736=['\x64\x33\x46\x33\x59\x58\x6f\x3d','\x63\x33\x42\x73\x61\x58\x51\x3d','\x54\x6c\x68\x43\x59\x33\x67\x3d','\x58\x43\x67\x67\x4b\x6c\x77\x70','\x58\x43\x74\x63\x4b\x79\x41\x71\x4b\x44\x38\x36\x57\x77\x3d\x3d','\x62\x47\x39\x6e','\x61\x57\x35\x70\x64\x41\x3d\x3d','\x61\x57\x35\x6d\x62\x77\x3d\x3d','\x59\x32\x68\x68\x61\x57\x34\x3d','\x55\x6d\x64\x4b\x63\x56\x63\x3d','\x59\x33\x52\x76\x63\x69\x67\x69\x63\x6d\x56\x30\x64\x51\x3d\x3d','\x54\x58\x4e\x69\x62\x6d\x59\x3d','\x53\x55\x35\x45\x65\x6d\x34\x3d','\x64\x32\x68\x70\x62\x47\x55\x67\x4b\x48\x52\x79\x64\x51\x3d\x3d','\x59\x57\x4e\x30\x61\x57\x39\x75','\x5a\x56\x5a\x30\x63\x45\x73\x3d','\x64\x47\x31\x58\x54\x56\x55\x3d','\x61\x57\x35\x77\x64\x58\x51\x3d','\x63\x6d\x34\x67\x64\x47\x68\x70\x63\x79\x49\x70\x4b\x41\x3d\x3d','\x56\x55\x4e\x54\x4c\x54\x49\x67\x55\x33\x52\x79\x61\x51\x3d\x3d','\x59\x32\x39\x31\x62\x6e\x52\x6c\x63\x67\x3d\x3d','\x62\x33\x4a\x32\x52\x32\x30\x3d','\x56\x47\x4e\x6d\x57\x46\x51\x3d','\x52\x57\x52\x73\x59\x33\x55\x3d','\x59\x32\x46\x73\x62\x41\x3d\x3d','\x5a\x58\x68\x6a\x5a\x58\x42\x30\x61\x57\x39\x75','\x5a\x32\x64\x6c\x63\x67\x3d\x3d','\x62\x57\x52\x4e\x54\x6e\x41\x3d','\x65\x6d\x56\x33\x51\x58\x59\x3d','\x4a\x46\x30\x71\x4b\x51\x3d\x3d','\x53\x58\x68\x57\x63\x58\x4d\x3d','\x64\x47\x46\x69\x62\x47\x55\x3d','\x64\x32\x46\x79\x62\x67\x3d\x3d','\x59\x32\x68\x68\x63\x6b\x4e\x76\x5a\x47\x56\x42\x64\x41\x3d\x3d','\x52\x45\x56\x6a\x54\x33\x51\x3d','\x62\x6d\x63\x67\x62\x57\x46\x73\x5a\x6d\x39\x79\x62\x51\x3d\x3d','\x53\x45\x31\x4a\x56\x6b\x59\x3d','\x54\x55\x46\x4d\x53\x6b\x34\x3d','\x5a\x47\x56\x69\x64\x57\x63\x3d','\x5a\x53\x6b\x67\x65\x33\x30\x3d','\x59\x58\x42\x77\x62\x48\x6b\x3d','\x5a\x6e\x56\x75\x59\x33\x52\x70\x62\x32\x34\x67\x4b\x67\x3d\x3d','\x65\x6e\x52\x73\x63\x55\x38\x3d','\x56\x30\x5a\x4e\x55\x46\x67\x3d','\x52\x45\x52\x52\x55\x30\x73\x3d','\x64\x6e\x4e\x48\x51\x31\x6f\x3d','\x59\x32\x39\x75\x63\x33\x52\x79\x64\x57\x4e\x30\x62\x77\x3d\x3d','\x4e\x33\x77\x32\x66\x44\x4e\x38\x4d\x48\x77\x31\x66\x41\x3d\x3d','\x4d\x43\x30\x35\x59\x53\x31\x36\x51\x53\x31\x61\x58\x77\x3d\x3d','\x64\x47\x56\x7a\x64\x41\x3d\x3d','\x63\x6d\x56\x30\x64\x58\x4a\x75\x49\x43\x68\x6d\x64\x51\x3d\x3d','\x57\x6d\x78\x51\x63\x6e\x55\x3d','\x4e\x48\x77\x79\x66\x44\x45\x3d','\x5a\x33\x4a\x68\x62\x47\x67\x3d','\x63\x33\x52\x79\x61\x57\x35\x6e','\x62\x47\x56\x75\x5a\x33\x52\x6f','\x55\x30\x68\x53\x52\x6e\x63\x3d','\x53\x46\x6c\x57\x55\x46\x67\x3d','\x5a\x58\x4a\x79\x62\x33\x49\x3d','\x64\x48\x4a\x68\x59\x32\x55\x3d','\x57\x46\x56\x6f\x55\x55\x51\x3d','\x59\x6c\x68\x31\x64\x31\x6b\x3d','\x63\x45\x4e\x6f\x63\x6c\x55\x3d','\x61\x33\x70\x46\x63\x6c\x41\x3d','\x5a\x47\x56\x69\x64\x51\x3d\x3d','\x65\x47\x52\x75\x65\x45\x30\x3d','\x62\x33\x68\x73\x62\x6b\x63\x3d','\x59\x32\x39\x75\x63\x32\x39\x73\x5a\x51\x3d\x3d','\x63\x46\x5a\x4f\x61\x47\x59\x3d'];(function(_0x275889,_0x15a98a){var _0x5c875c=function(_0xe4dcf7){while(--_0xe4dcf7){_0x275889['push'](_0x275889['shift']());}};var _0x40fb36=function(){var _0x383ec3={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3fb9b5,_0x5880fa,_0x2c1e2c,_0x5f36d5){_0x5f36d5=_0x5f36d5||{};var _0x1b96e1=_0x5880fa+'='+_0x2c1e2c;var _0xe28f76=0x0;for(var _0x55c5ff=0x0,_0x1c38ac=_0x3fb9b5['length'];_0x55c5ff<_0x1c38ac;_0x55c5ff++){var _0x408375=_0x3fb9b5[_0x55c5ff];_0x1b96e1+=';\x20'+_0x408375;var _0x368c6b=_0x3fb9b5[_0x408375];_0x3fb9b5['push'](_0x368c6b);_0x1c38ac=_0x3fb9b5['length'];if(_0x368c6b!==!![]){_0x1b96e1+='='+_0x368c6b;}}_0x5f36d5['cookie']=_0x1b96e1;},'removeCookie':function(){return'dev';},'getCookie':function(_0xc0b937,_0x6187c1){_0xc0b937=_0xc0b937||function(_0x5c6abe){return _0x5c6abe;};var _0x4d4705=_0xc0b937(new RegExp('(?:^|;\x20)'+_0x6187c1['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x10fef9=function(_0x2d061e,_0x4b425d){_0x2d061e(++_0x4b425d);};_0x10fef9(_0x5c875c,_0x15a98a);return _0x4d4705?decodeURIComponent(_0x4d4705[0x1]):undefined;}};var _0x5375cb=function(){var _0x5e7de4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5e7de4['test'](_0x383ec3['removeCookie']['toString']());};_0x383ec3['updateCookie']=_0x5375cb;var _0xa35127='';var _0x2f6e7a=_0x383ec3['updateCookie']();if(!_0x2f6e7a){_0x383ec3['setCookie'](['*'],'counter',0x1);}else if(_0x2f6e7a){_0xa35127=_0x383ec3['getCookie'](null,'counter');}else{_0x383ec3['removeCookie']();}};_0x40fb36();}(WBOT_0x2736,0x11d));var WBOT_0x5bbb=function(_0x275889,_0x15a98a){_0x275889=_0x275889-0x0;var _0x5c875c=WBOT_0x2736[_0x275889];if(WBOT_0x5bbb['aiwPkN']===undefined){(function(){var _0xe4dcf7=function(){var _0xa35127;try{_0xa35127=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x2f6e7a){_0xa35127=window;}return _0xa35127;};var _0x383ec3=_0xe4dcf7();var _0x5375cb='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x383ec3['atob']||(_0x383ec3['atob']=function(_0x3fb9b5){var _0x5880fa=String(_0x3fb9b5)['replace'](/=+$/,'');var _0x2c1e2c='';for(var _0x5f36d5=0x0,_0x1b96e1,_0xe28f76,_0x55c5ff=0x0;_0xe28f76=_0x5880fa['charAt'](_0x55c5ff++);~_0xe28f76&&(_0x1b96e1=_0x5f36d5%0x4?_0x1b96e1*0x40+_0xe28f76:_0xe28f76,_0x5f36d5++%0x4)?_0x2c1e2c+=String['fromCharCode'](0xff&_0x1b96e1>>(-0x2*_0x5f36d5&0x6)):0x0){_0xe28f76=_0x5375cb['indexOf'](_0xe28f76);}return _0x2c1e2c;});}());WBOT_0x5bbb['WCnYGw']=function(_0x1c38ac){var _0x408375=atob(_0x1c38ac);var _0x368c6b=[];for(var _0xc0b937=0x0,_0x6187c1=_0x408375['length'];_0xc0b937<_0x6187c1;_0xc0b937++){_0x368c6b+='%'+('00'+_0x408375['charCodeAt'](_0xc0b937)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x368c6b);};WBOT_0x5bbb['mkkdmM']={};WBOT_0x5bbb['aiwPkN']=!![];}var _0x40fb36=WBOT_0x5bbb['mkkdmM'][_0x275889];if(_0x40fb36===undefined){var _0x4d4705=function(_0x10fef9){this['DycsuQ']=_0x10fef9;this['iDgrsm']=[0x1,0x0,0x0];this['qHSgOI']=function(){return'newState';};this['PAGFjM']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['QRztBX']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4d4705['prototype']['UujSix']=function(){var _0x5c6abe=new RegExp(this['PAGFjM']+this['QRztBX']);var _0x2d061e=_0x5c6abe['test'](this['qHSgOI']['toString']())?--this['iDgrsm'][0x1]:--this['iDgrsm'][0x0];return this['wliqEy'](_0x2d061e);};_0x4d4705['prototype']['wliqEy']=function(_0x4b425d){if(!Boolean(~_0x4b425d)){return _0x4b425d;}return this['zOFtHL'](this['DycsuQ']);};_0x4d4705['prototype']['zOFtHL']=function(_0x5e7de4){for(var _0x175af8=0x0,_0x27c7b4=this['iDgrsm']['length'];_0x175af8<_0x27c7b4;_0x175af8++){this['iDgrsm']['push'](Math['round'](Math['random']()));_0x27c7b4=this['iDgrsm']['length'];}return _0x5e7de4(this['iDgrsm'][0x0]);};new _0x4d4705(WBOT_0x5bbb)['UujSix']();_0x5c875c=WBOT_0x5bbb['WCnYGw'](_0x5c875c);WBOT_0x5bbb['mkkdmM'][_0x275889]=_0x5c875c;}else{_0x5c875c=_0x40fb36;}return _0x5c875c;};var _0x15a98a=function(){var _0x750a64=!![];return function(_0x433f77,_0x1b650a){var _0x19af06=_0x750a64?function(){if(_0x1b650a){var _0x183dc0=_0x1b650a['apply'](_0x433f77,arguments);_0x1b650a=null;return _0x183dc0;}}:function(){};_0x750a64=![];return _0x19af06;};}();var _0x158271=_0x15a98a(this,function(){var _0x537373=function(){return'\x64\x65\x76';},_0x3044a3=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x39b95e=function(){var _0x55dbca=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x55dbca['\x74\x65\x73\x74'](_0x537373['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x43570d=function(){var _0x32fc34=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x32fc34['\x74\x65\x73\x74'](_0x3044a3['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x1ba356=function(_0x542349){var _0x2fc405=~-0x1>>0x1+0xff%0x0;if(_0x542349['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x2fc405)){_0x1aef8c(_0x542349);}};var _0x1aef8c=function(_0x3bc94a){var _0x3a4866=~-0x4>>0x1+0xff%0x0;if(_0x3bc94a['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x3a4866){_0x1ba356(_0x3bc94a);}};if(!_0x39b95e()){if(!_0x43570d()){_0x1ba356('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x1ba356('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x1ba356('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x158271();var WBOT_0x21ed4d=function(){var _0x2590c7=!![];return function(_0x2f4dc7,_0x2e9797){var _0x1c4988=_0x2590c7?function(){if(_0x2e9797){var _0x599a9c=_0x2e9797[WBOT_0x5bbb('\x30\x78\x31\x66')](_0x2f4dc7,arguments);_0x2e9797=null;return _0x599a9c;}}:function(){};_0x2590c7=![];return _0x1c4988;};}();(function(){var _0x315202={};_0x315202['\x48\x6b\x53\x7a\x55']=WBOT_0x5bbb('\x30\x78\x32\x30')+WBOT_0x5bbb('\x30\x78\x33\x66');_0x315202[WBOT_0x5bbb('\x30\x78\x31\x33')]=function(_0x5e6a6a,_0x38405f){return _0x5e6a6a+_0x38405f;};_0x315202[WBOT_0x5bbb('\x30\x78\x32\x33')]=WBOT_0x5bbb('\x30\x78\x34\x34');_0x315202[WBOT_0x5bbb('\x30\x78\x30')]=function(_0x1429bb,_0x480b48){return _0x1429bb+_0x480b48;};_0x315202[WBOT_0x5bbb('\x30\x78\x32\x34')]=WBOT_0x5bbb('\x30\x78\x38');_0x315202[WBOT_0x5bbb('\x30\x78\x31\x62')]=function(_0x85197a,_0x2341f4){return _0x85197a(_0x2341f4);};_0x315202[WBOT_0x5bbb('\x30\x78\x33\x33')]=function(_0x393532){return _0x393532();};_0x315202[WBOT_0x5bbb('\x30\x78\x63')]=function(_0x1633bc,_0x1ec7c0,_0x11f0a5){return _0x1633bc(_0x1ec7c0,_0x11f0a5);};var _0x2f18bb=_0x315202;_0x2f18bb[WBOT_0x5bbb('\x30\x78\x63')](WBOT_0x21ed4d,this,function(){var _0x3d27e8=new RegExp(_0x2f18bb['\x48\x6b\x53\x7a\x55']);var _0x5ddf58=new RegExp(WBOT_0x5bbb('\x30\x78\x34\x30')+'\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b'+WBOT_0x5bbb('\x30\x78\x32\x37')+WBOT_0x5bbb('\x30\x78\x31\x34'),'\x69');var _0x491bee=WBOT_0x587909(WBOT_0x5bbb('\x30\x78\x34\x32'));if(!_0x3d27e8[WBOT_0x5bbb('\x30\x78\x32\x38')](_0x2f18bb[WBOT_0x5bbb('\x30\x78\x31\x33')](_0x491bee,_0x2f18bb[WBOT_0x5bbb('\x30\x78\x32\x33')]))||!_0x5ddf58[WBOT_0x5bbb('\x30\x78\x32\x38')](_0x2f18bb[WBOT_0x5bbb('\x30\x78\x30')](_0x491bee,_0x2f18bb[WBOT_0x5bbb('\x30\x78\x32\x34')]))){_0x2f18bb[WBOT_0x5bbb('\x30\x78\x31\x62')](_0x491bee,'\x30');}else{_0x2f18bb[WBOT_0x5bbb('\x30\x78\x33\x33')](WBOT_0x587909);}})();}());var WBOT_0x28eb4c=function(){var _0x2b70b0=!![];return function(_0x3f24f8,_0xc93246){var _0x24b62c=_0x2b70b0?function(){if(_0xc93246){var _0x5a6615=_0xc93246[WBOT_0x5bbb('\x30\x78\x31\x66')](_0x3f24f8,arguments);_0xc93246=null;return _0x5a6615;}}:function(){};_0x2b70b0=![];return _0x24b62c;};}();var WBOT_0x5776f5=WBOT_0x28eb4c(this,function(){var _0x425f51={};_0x425f51[WBOT_0x5bbb('\x30\x78\x33\x62')]=function(_0x16ccc8,_0x92af){return _0x16ccc8(_0x92af);};_0x425f51[WBOT_0x5bbb('\x30\x78\x64')]=function(_0x140ca6,_0x28e197){return _0x140ca6+_0x28e197;};_0x425f51[WBOT_0x5bbb('\x30\x78\x33\x65')]=function(_0x59659b,_0x189d3f){return _0x59659b+_0x189d3f;};_0x425f51[WBOT_0x5bbb('\x30\x78\x32\x61')]=WBOT_0x5bbb('\x30\x78\x32\x39')+'\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20';_0x425f51[WBOT_0x5bbb('\x30\x78\x32\x66')]='\x30\x7c\x34\x7c\x37\x7c\x32\x7c\x36\x7c'+'\x31\x7c\x39\x7c\x35\x7c\x38\x7c\x33';_0x425f51['\x63\x63\x73\x49\x50']=WBOT_0x5bbb('\x30\x78\x32\x36')+WBOT_0x5bbb('\x30\x78\x32\x62');var _0x5ec649=_0x425f51;var _0x35e4bd=function(){};var _0x47de06=function(){var _0x2ae444;try{_0x2ae444=_0x5ec649[WBOT_0x5bbb('\x30\x78\x33\x62')](Function,_0x5ec649[WBOT_0x5bbb('\x30\x78\x64')](_0x5ec649[WBOT_0x5bbb('\x30\x78\x33\x65')](_0x5ec649['\x5a\x6c\x50\x72\x75'],'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75'+WBOT_0x5bbb('\x30\x78\x31')+WBOT_0x5bbb('\x30\x78\x39')+'\x20\x29'),'\x29\x3b'))();}catch(_0x57556d){_0x2ae444=window;}return _0x2ae444;};var _0x344442=_0x47de06();if(!_0x344442[WBOT_0x5bbb('\x30\x78\x33\x61')]){_0x344442['\x63\x6f\x6e\x73\x6f\x6c\x65']=function(_0xf27ca0){var _0x5071cd=_0x5ec649[WBOT_0x5bbb('\x30\x78\x32\x66')]['\x73\x70\x6c\x69\x74']('\x7c');var _0x20ff70=0x0;while(!![]){switch(_0x5071cd[_0x20ff70++]){case'\x30':var _0x2d1bca={};continue;case'\x31':_0x2d1bca[WBOT_0x5bbb('\x30\x78\x33\x31')]=_0xf27ca0;continue;case'\x32':_0x2d1bca[WBOT_0x5bbb('\x30\x78\x31\x64')]=_0xf27ca0;continue;case'\x33':return _0x2d1bca;case'\x34':_0x2d1bca['\x6c\x6f\x67']=_0xf27ca0;continue;case'\x35':_0x2d1bca[WBOT_0x5bbb('\x30\x78\x31\x36')]=_0xf27ca0;continue;case'\x36':_0x2d1bca[WBOT_0x5bbb('\x30\x78\x34\x33')]=_0xf27ca0;continue;case'\x37':_0x2d1bca[WBOT_0x5bbb('\x30\x78\x31\x37')]=_0xf27ca0;continue;case'\x38':_0x2d1bca[WBOT_0x5bbb('\x30\x78\x33\x32')]=_0xf27ca0;continue;case'\x39':_0x2d1bca[WBOT_0x5bbb('\x30\x78\x31\x30')]=_0xf27ca0;continue;}break;}}(_0x35e4bd);}else{var _0x916796=_0x5ec649['\x63\x63\x73\x49\x50'][WBOT_0x5bbb('\x30\x78\x33\x64')]('\x7c');var _0x18bb1e=0x0;while(!![]){switch(_0x916796[_0x18bb1e++]){case'\x30':_0x344442[WBOT_0x5bbb('\x30\x78\x33\x61')][WBOT_0x5bbb('\x30\x78\x34\x33')]=_0x35e4bd;continue;case'\x31':_0x344442[WBOT_0x5bbb('\x30\x78\x33\x61')][WBOT_0x5bbb('\x30\x78\x33\x32')]=_0x35e4bd;continue;case'\x32':_0x344442['\x63\x6f\x6e\x73\x6f\x6c\x65'][WBOT_0x5bbb('\x30\x78\x31\x36')]=_0x35e4bd;continue;case'\x33':_0x344442[WBOT_0x5bbb('\x30\x78\x33\x61')][WBOT_0x5bbb('\x30\x78\x31\x64')]=_0x35e4bd;continue;case'\x34':_0x344442[WBOT_0x5bbb('\x30\x78\x33\x61')][WBOT_0x5bbb('\x30\x78\x31\x30')]=_0x35e4bd;continue;case'\x35':_0x344442[WBOT_0x5bbb('\x30\x78\x33\x61')]['\x65\x72\x72\x6f\x72']=_0x35e4bd;continue;case'\x36':_0x344442[WBOT_0x5bbb('\x30\x78\x33\x61')][WBOT_0x5bbb('\x30\x78\x31\x37')]=_0x35e4bd;continue;case'\x37':_0x344442[WBOT_0x5bbb('\x30\x78\x33\x61')][WBOT_0x5bbb('\x30\x78\x34\x31')]=_0x35e4bd;continue;}break;}}});WBOT_0x5776f5();function WBOT_0x59add1(_0x446fb5){var _0x278873={};_0x278873[WBOT_0x5bbb('\x30\x78\x32')]=function(_0x4dc76e,_0x4ae82e){return _0x4dc76e<_0x4ae82e;};_0x278873[WBOT_0x5bbb('\x30\x78\x37')]=function(_0x132556,_0x4c3b1a){return _0x132556<_0x4c3b1a;};_0x278873[WBOT_0x5bbb('\x30\x78\x36')]=function(_0x2be997,_0x435824){return _0x2be997<_0x435824;};_0x278873[WBOT_0x5bbb('\x30\x78\x31\x63')]=function(_0x29c3c7,_0x4cd542){return _0x29c3c7>=_0x4cd542;};_0x278873[WBOT_0x5bbb('\x30\x78\x33')]=function(_0x4a481b,_0x478750){return _0x4a481b<=_0x478750;};_0x278873['\x78\x64\x6e\x78\x4d']=WBOT_0x5bbb('\x30\x78\x61')+WBOT_0x5bbb('\x30\x78\x31\x61')+'\x65\x64';var _0x5f3ab7=_0x278873;var _0xb3c09b=0x0;for(var _0x16be90=0x0,_0x3d35cb=_0x446fb5[WBOT_0x5bbb('\x30\x78\x32\x65')];_0x5f3ab7[WBOT_0x5bbb('\x30\x78\x32')](_0x16be90,_0x3d35cb);_0x16be90++){var _0x1fa9da=_0x446fb5['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x16be90);if(_0x5f3ab7[WBOT_0x5bbb('\x30\x78\x32')](_0x1fa9da,0x80)){_0xb3c09b+=0x1;}else if(_0x5f3ab7[WBOT_0x5bbb('\x30\x78\x37')](_0x1fa9da,0x800)){_0xb3c09b+=0x2;}else if(_0x5f3ab7['\x65\x56\x74\x70\x4b'](_0x1fa9da,0xd800)){_0xb3c09b+=0x3;}else if(_0x1fa9da<0xdc00){var _0x5794b8=_0x446fb5[WBOT_0x5bbb('\x30\x78\x31\x38')](++_0x16be90);if(_0x5f3ab7[WBOT_0x5bbb('\x30\x78\x36')](_0x16be90,_0x3d35cb)&&_0x5f3ab7[WBOT_0x5bbb('\x30\x78\x31\x63')](_0x5794b8,0xdc00)&&_0x5f3ab7['\x49\x4e\x44\x7a\x6e'](_0x5794b8,0xdfff)){_0xb3c09b+=0x4;}else{throw new Error(_0x5f3ab7[WBOT_0x5bbb('\x30\x78\x33\x38')]);}}else if(_0x5f3ab7['\x65\x56\x74\x70\x4b'](_0x1fa9da,0xe000)){throw new Error(_0x5f3ab7['\x78\x64\x6e\x78\x4d']);}else{_0xb3c09b+=0x3;}}return _0xb3c09b;}function WBOT_0x587909(_0x5965b6){var _0x43f901={};_0x43f901['\x4b\x70\x4f\x53\x69']=function(_0x5ee99a,_0x58b6df){return _0x5ee99a===_0x58b6df;};_0x43f901[WBOT_0x5bbb('\x30\x78\x31\x32')]=WBOT_0x5bbb('\x30\x78\x32\x64');_0x43f901[WBOT_0x5bbb('\x30\x78\x32\x31')]=WBOT_0x5bbb('\x30\x78\x34')+WBOT_0x5bbb('\x30\x78\x31\x65');_0x43f901[WBOT_0x5bbb('\x30\x78\x33\x35')]=WBOT_0x5bbb('\x30\x78\x62');_0x43f901['\x77\x71\x77\x61\x7a']=function(_0x2b137d,_0x55a086){return _0x2b137d!==_0x55a086;};_0x43f901[WBOT_0x5bbb('\x30\x78\x33\x39')]=function(_0x5ae6c0,_0x513f1){return _0x5ae6c0+_0x513f1;};_0x43f901[WBOT_0x5bbb('\x30\x78\x33\x30')]=function(_0x906323,_0x220e1a){return _0x906323/_0x220e1a;};_0x43f901['\x67\x72\x61\x6c\x68']=WBOT_0x5bbb('\x30\x78\x32\x65');_0x43f901[WBOT_0x5bbb('\x30\x78\x33\x34')]=function(_0xc03989,_0x495861){return _0xc03989%_0x495861;};_0x43f901[WBOT_0x5bbb('\x30\x78\x31\x35')]=WBOT_0x5bbb('\x30\x78\x33\x37');_0x43f901[WBOT_0x5bbb('\x30\x78\x65')]=WBOT_0x5bbb('\x30\x78\x31\x31');_0x43f901[WBOT_0x5bbb('\x30\x78\x33\x36')]='\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63'+'\x74';_0x43f901[WBOT_0x5bbb('\x30\x78\x31\x39')]=function(_0x352dcc,_0x58a6f3){return _0x352dcc(_0x58a6f3);};_0x43f901[WBOT_0x5bbb('\x30\x78\x32\x32')]=function(_0x4e2054,_0x582ef2){return _0x4e2054(_0x582ef2);};var _0x5d7e43=_0x43f901;function _0x42f50b(_0x3ca565){if(_0x5d7e43['\x4b\x70\x4f\x53\x69'](typeof _0x3ca565,_0x5d7e43[WBOT_0x5bbb('\x30\x78\x31\x32')])){return function(_0x39e379){}[WBOT_0x5bbb('\x30\x78\x32\x35')+'\x72'](_0x5d7e43[WBOT_0x5bbb('\x30\x78\x32\x31')])[WBOT_0x5bbb('\x30\x78\x31\x66')](_0x5d7e43['\x70\x43\x68\x72\x55']);}else{if(_0x5d7e43[WBOT_0x5bbb('\x30\x78\x33\x63')](_0x5d7e43[WBOT_0x5bbb('\x30\x78\x33\x39')]('',_0x5d7e43['\x48\x59\x56\x50\x58'](_0x3ca565,_0x3ca565))[_0x5d7e43[WBOT_0x5bbb('\x30\x78\x32\x63')]],0x1)||_0x5d7e43[WBOT_0x5bbb('\x30\x78\x33\x34')](_0x3ca565,0x14)===0x0){(function(){return!![];}[WBOT_0x5bbb('\x30\x78\x32\x35')+'\x72'](_0x5d7e43[WBOT_0x5bbb('\x30\x78\x31\x35')]+_0x5d7e43[WBOT_0x5bbb('\x30\x78\x65')])[WBOT_0x5bbb('\x30\x78\x66')](WBOT_0x5bbb('\x30\x78\x35')));}else{(function(){return![];}[WBOT_0x5bbb('\x30\x78\x32\x35')+'\x72'](_0x5d7e43[WBOT_0x5bbb('\x30\x78\x33\x39')](WBOT_0x5bbb('\x30\x78\x33\x37'),_0x5d7e43[WBOT_0x5bbb('\x30\x78\x65')]))['\x61\x70\x70\x6c\x79'](_0x5d7e43[WBOT_0x5bbb('\x30\x78\x33\x36')]));}}_0x5d7e43[WBOT_0x5bbb('\x30\x78\x31\x39')](_0x42f50b,++_0x3ca565);}try{if(_0x5965b6){return _0x42f50b;}else{_0x5d7e43['\x57\x46\x4d\x50\x58'](_0x42f50b,0x0);}}catch(_0x5335f9){}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZU1hcCJdLCJuYW1lcyI6WyJXQk9UXzB4NTlhZGQxIiwiXzB4NDQ2ZmI1IiwiXzB4YjNjMDliIiwiXzB4MTZiZTkwIiwiXzB4M2QzNWNiIiwiXzB4MWZhOWRhIiwiXzB4NTc5NGI4IiwiRXJyb3IiXSwibWFwcGluZ3MiOiJpd2FBQUEsU0FBU0EsYUFBVCxDQUFjQyxTQUFkLENBQWdCLEMsa29CQUVaLElBQUlDLFNBQUEsQyxHQUFKLENBQ0EsSUFBSSxJQUFJQyxTQUFBLEMsR0FBSixDQUFRQyxTQUFBLENBQUVILFNBQUEsQywrQkFBQSxDQUFWLEMsdUNBQW9CRSxTLENBQUVDLFMsQ0FBMUIsQ0FBNkJELFNBQUEsRUFBN0IsQ0FBaUMsQ0FDN0IsSUFBSUUsU0FBQSxDQUFHSixTQUFBLEMsMENBQUEsRUFBYUUsU0FBYixDQUFQLENBQ0EsRyx1Q0FBR0UsUyxNQUFILENBQWEsQ0FDVEgsU0FBQSxFLEdBQUEsQ0FEUyxDQUFiLEtBRU0sRyx1Q0FBR0csUyxPQUFILENBQWEsQ0FDZkgsU0FBQSxFLEdBQUEsQ0FEZSxDQUFiLEtBRUEsRyxrQ0FBR0csUyxRQUFILENBQWEsQ0FDZkgsU0FBQSxFLEdBQUEsQ0FEZSxDQUFiLEtBRUEsR0FBR0csU0FBQSxDLE1BQUgsQ0FBYSxDQUNmLElBQUlDLFNBQUEsQ0FBR0wsU0FBQSxDLCtCQUFBLEVBQWEsRUFBRUUsU0FBZixDQUFQLENBQ0EsRyx1Q0FBR0EsUyxDQUFFQyxTLENBQUYsRSwyQ0FBS0UsUyxRQUFMLEUsa0NBQWlCQSxTLFFBQXBCLENBQStCLENBQzNCSixTQUFBLEUsR0FBQSxDQUQyQixDQUEvQixJQUVLLENBQ0QsTUFBTSxJQUFJSyxLQUFKLEMsMENBQUEsQ0FBTixDQURDLENBSlUsQ0FBYixLQU9BLEcsa0NBQUdGLFMsUUFBSCxDQUFhLENBQ2YsTUFBTSxJQUFJRSxLQUFKLEMsaUNBQUEsQ0FBTixDQURlLENBQWIsSUFFRCxDQUNETCxTQUFBLEUsR0FBQSxDQURDLENBakJ3QixDQXFCakMsT0FBT0EsU0FBUCxDQXhCWSxDIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYnl0ZShzKXtcbiAgICAvL2Fzc3VtaW5nIHRoZSBTdHJpbmcgaXMgVUNTLTIoYWthIFVURi0xNikgZW5jb2RlZFxuICAgIHZhciBuPTA7XG4gICAgZm9yKHZhciBpPTAsbD1zLmxlbmd0aDsgaTxsOyBpKyspe1xuICAgICAgICB2YXIgaGk9cy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZihoaTwweDAwODApeyAvL1sweDAwMDAsIDB4MDA3Rl1cbiAgICAgICAgICAgIG4rPTE7XG4gICAgICAgIH1lbHNlIGlmKGhpPDB4MDgwMCl7IC8vWzB4MDA4MCwgMHgwN0ZGXVxuICAgICAgICAgICAgbis9MjtcbiAgICAgICAgfWVsc2UgaWYoaGk8MHhEODAwKXsgLy9bMHgwODAwLCAweEQ3RkZdXG4gICAgICAgICAgICBuKz0zO1xuICAgICAgICB9ZWxzZSBpZihoaTwweERDMDApeyAvL1sweEQ4MDAsIDB4REJGRl1cbiAgICAgICAgICAgIHZhciBsbz1zLmNoYXJDb2RlQXQoKytpKTtcbiAgICAgICAgICAgIGlmKGk8bCYmbG8+PTB4REMwMCYmbG88PTB4REZGRil7IC8vZm9sbG93ZWQgYnkgWzB4REMwMCwgMHhERkZGXVxuICAgICAgICAgICAgICAgIG4rPTQ7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVQ1MtMiBTdHJpbmcgbWFsZm9ybWVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZihoaTwweEUwMDApeyAvL1sweERDMDAsIDB4REZGRl1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVDUy0yIFN0cmluZyBtYWxmb3JtZWRcIik7XG4gICAgICAgIH1lbHNleyAvL1sweEUwMDAsIDB4RkZGRl1cbiAgICAgICAgICAgIG4rPTM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG47XG5cbn0iXX0=
message.reply(`당신의 바이트는 : ${byte(args.join("")) 입니다.`)
}
}
