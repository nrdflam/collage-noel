#!/bin/sh
# Force les navigateurs à recharger CSS et JS après chaque mise en ligne (à lancer avant chaque commit)
v=$(date +%Y%m%d%H%M)
sed -i -E "s#(css/app\.css|js/app\.js|config\.js)(\?v=[0-9]+)?\"#\1?v=$v\"#g" index.html
echo "version $v"
