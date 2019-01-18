module.exports = {
  title: '블랙루비 블로그',
  description: '블랙루비 스튜디오, blackruby 공식 블로그',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '회사 이야기', link: '/company/' },
      { text: '프로젝트 이야기', link: '/project/' },
      { text: '회사 홈페이지', link: 'https://blackruby.studio/' },
    ],
    sidebar: {
      '/company/': [
        '',
        'netflix_culture',
        'woowahan_culture',
        'tax_accounting'
      ],
      '/project/': [
        '',
        '5g_game',
        'cloud_gaming',
        'why_fans_are_more_excited',
        'pc_bang'
      ]
    }
  }
}
