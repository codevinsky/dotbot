module.exports = {
  brew: [
    // http://conqueringthecommandline.com/book/ack_ag
    'ack',
    'ag',
    // Install GNU core utilities (those that come with OS X are outdated)
    // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    'coreutils',
    'cowsay',
    'dark-mode',
    'dos2unix',
    // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'findutils',
    'fortune',
    'gawk',
    // http://www.lcdf.org/gifsicle/ (because I'm a gif junky)
    'gifsicle',
    'gnupg',
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    'gnu-sed --default-names',
    // better, more recent grep
    'homebrew/dupes/grep --default-names',
    'homebrew/dupes/screen',
    'homebrew/dupes/openssh',

    // https://github.com/jkbrzt/httpie
    'httpie',
    'imagemagick',
    'imagesnap',
    // jq is a sort of JSON grep
    'jq',
    // Install some other useful utilities like `sponge`
    'moreutils',
    'nmap',
    'openconnect',
    'reattach-to-user-namespace',
    // better/more recent version of screen
    'tmux',
    'tree',
    'ttyrec',
    // better, more recent vim
    'vim --override-system-vi',
    'watch',
    // Install wget with IRI support
    'wget --enable-iri'
  ],
  cask: [
    '1password',
    // 'adium',
    // 'amazon-cloud-drive',
    'atom',
    'caprine',
    // 'comicbooklover',
    // 'diffmerge',
    'dropbox',
    // 'evernote',
    'google-chrome',
    'hipchat',
    // 'ireadfast',
    'iterm2',
    'macvim',
    'qlcolorcode',
    'qlstephen',
    'qlmarkdown',
    'quicklook-json',
    'qlprettypatch',
    'quicklook-csv',
    'betterzipql',
    'qlimagesize',
    'webpquicklook',
    'sizeup',

    // 'sketchup',
    'slack',
    'the-unarchiver',
    // 'torbrowser',
    'transmission',
    'vlc'
  ],
  gem: [
    'git-up',
    'jekyll',
    'sup'
  ],
  npm: [
    'antic',
    'auto-install',
    'buzzphrase',
    'eslint',
    'instant-markdown-d',
    'npm-check',
    'yo',
    'generator-dockerize',
    'gulp',
    'prettyjson',
    'trash',
    'vtop'
  ]
}
