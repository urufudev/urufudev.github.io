module.exports = {
  siteTitle: 'Yimy David Huamancusi Campos',
  siteDescription:
    'Yimy David Huamancusi Campos Ingeniero de Sistemas e Informática, a quien le encanta aprender cosas nuevas y ayudar a los principiantes de la programación.',
  siteKeywords:
    'Yimy David Huamancusi Campos, urufu, urufudev, ingeniero de sistemas, laravel developer, developer, javascript, hackintosh, livewire',
  siteUrl: 'https://urufudev.github.io/',
  siteLanguage: 'es_ES',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Yimy David Huamancusi Campos',
  location: 'Ayacucho, Peru',
  email: 'yimydavidhc@gmail.com',
  github: 'https://github.com/urufudev',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/urufudev',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/yimydavidhc/',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/urufu.d/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/yimydavidhc/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Urufu_Yimy',
    },
  ],

  navLinks: [
    {
      name: 'Sobre mi',
      url: '/#about',
    },
    {
      name: 'Experiencia',
      url: '/#jobs',
    },
    {
      name: 'Proyectos',
      url: '/#projects',
    },
    {
      name: 'Contactame',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
