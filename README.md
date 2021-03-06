# Singer Civilization

This app created using Polymer3

$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"

$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

$ sudo rm -rf /Library/Developer/CommandLineTools

$ xcode-select --install

$ brew uninstall -f node

$ brew uninstall -f icu4c

$ 删除node文件，完全卸载node和npm

$ brew cleanup -s

$ sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d ~/.npm ~/.node-gyp /opt/local/bin/node opt/local/include/node /opt/local/lib/node_modules

$ brew upgrade

$ brew update

$ brew cleanup -s

$ brew missing

$ brew outdated

// 替换brew.git:

$ cd "$(brew --repo)"

$ git remote set-url origin https://mirrors.ustc.edu.cn/brew.git

// 替换homebrew-core.git:

$ cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"

$ git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

$ brew update

## 切回官方源

$ cd "$(brew --repo)"

$ git remote set-url origin https://github.com/Homebrew/brew.git

$ cd "$(brew --repo)"

$ git remote set-url origin https://github.com/Homebrew/brew.git

$ cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"

$ git remote set-url origin https://github.com/Homebrew/homebrew-core

$ brew update

$ brew install node -g -s --debug  # Compile the specified formula from source even if a bottle is provided. Dependencies will still be installed from bottles if they are available.

$ open ~/.bash_profile

$ echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile

$ echo 'export PATH="/usr/local/sbin:$PATH"' >> ~/.bash_profile

$ echo 'export PATH="/usr/local/Cellar/node/13.5.0/bin/:$PATH"' >> ~/.bash_profile

$ source .bash_profile

$ sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

$ brew link --overwrite node

$ npm config set registry https://registry.npm.taobao.org

$ npm cache clean --force

$ npm install -g npm@latest     # Update to the latest CLI version

$ npm install -g lit # Update to the latest CLI version

$ npm install -g lit-html # Update to the latest CLI version

$ npm install -g firebase-tools@latest # Update to the latest CLI version   

$ export http_proxy=http://localhost:port

$ npm i -g puppeteer --ignore-scripts

$ PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org npm i -g puppeteer

$ npm install -g firebase-admin@latest @gqlify/server@latest @gqlify/firebase@latest @gqlify/firestore@latest

$ git config --global core.autocrlf input

$ git config --global user.name "Your user name"

$ git config --global user.email Your_user_email

$ setup Lantern global "Proxy all traffic" model

$ export NODE_TLS_REJECT_UNAUTHORIZED=0

$ export http_proxy=http://localhost:port

$ firebase login --no-localhost

npm set registry https://registry.npm.taobao.org # 注册模块镜像
npm set disturl https://npm.taobao.org/dist # node-gyp 编译依赖的 node 源码镜像

## 以下选择添加
npm set sass_binary_site https://npm.taobao.org/mirrors/node-sass # node-sass 二进制包镜像
npm set electron_mirror https://npm.taobao.org/mirrors/electron/ # electron 二进制包镜像
npm set puppeteer_download_host https://npm.taobao.org/mirrors # puppeteer 二进制包镜像
npm set chromedriver_cdnurl https://npm.taobao.org/mirrors/chromedriver # chromedriver 二进制包镜像
npm set operadriver_cdnurl https://npm.taobao.org/mirrors/operadriver # operadriver 二进制包镜像
npm set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs # phantomjs 二进制包镜像
npm set selenium_cdnurl https://npm.taobao.org/mirrors/selenium # selenium 二进制包镜像
npm set node_inspector_cdnurl https://npm.taobao.org/mirrors/node-inspector # node-inspector 二进制包镜像

npm cache clean --force # 清空缓存

npm config set proxy http://server:port

npm config set https-proxy http://server:port

sudo ln -s /usr/local/bin/node /usr/bin/node

sudo ln -s /usr/local/lib/node /usr/lib/node

sudo ln -s /usr/local/bin/npm /usr/bin/npm

sudo ln -s /usr/local/bin/node-waf /usr/bin/node-waf
