D:\git\incubator\demo-electron\node_modules\electron\install.js:47
  throw err
  ^

Error: connect ETIMEDOUT 54.231.82.146:443

at Object.exports._errnoException (util.js:1018:11)
at exports._exceptionWithHostPort (util.js:1041:20)
at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1086:14)

npm WARN demo-electron@1.0.0 No description
npm WARN demo-electron@1.0.0 No repository field.
npm ERR! Windows_NT 10.0.15063
npm ERR! argv "C:\\Program Files\\nodejs\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" "install" "--save" "electron"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10
npm ERR! code ELIFECYCLE

npm ERR! electron@1.6.11 postinstall: `node install.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the electron@1.6.11 postinstall script 'node install.js'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the electron package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     node install.js
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs electron
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls electron
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     D:\git\incubator\demo-electron\npm-debug.log

window下解决方案，SET ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/