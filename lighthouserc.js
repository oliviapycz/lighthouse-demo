module.exports = {
  ci: {
    collect: {
      settings: {
        onlyCategories: [
          'performance',
          'accessibility',
          'seo',
        ],
      },
      url: [
        'https://lighthouse-demo-bbl.herokuapp.com/',
        'https://lighthouse-demo-bbl.herokuapp.com/bieres-phares',
        'https://lighthouse-demo-bbl.herokuapp.com/on-parle-de-nous',
      ],
    },
    upload: {
      serverBaseUrl: 'https://warm-dusk-22723.herokuapp.com/',
      target: 'lhci',
      token: 'f95128e3-172a-45fd-9249-3651d56f6d11',
    },
  },
};
