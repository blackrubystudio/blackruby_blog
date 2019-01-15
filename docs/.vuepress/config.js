module.exports = {
  title: '블랙루비 블로그',
  description: '블랙루비 공식 블로그',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: '회사 이야기', link: '/company/'},
      { text: '프로젝트 이야기', link: '/project/'},
      { text: '회사 홈페이지', link: 'https://blackruby.studio/'},
    ],
    sidebar: {
      '/company/': [
        '',
        'startup',
        'study'
      ],
      '/project/': [
        '',
        'beam_me',
        'celebee'
      ]
    }
  }
}
