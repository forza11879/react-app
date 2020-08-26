const menuItemsOne = [
  { icon: 'fa-bars', title: 'options', id: 1, linkUrl: '' },
  { icon: 'fa-folder-open', title: 'account', id: 2, linkUrl: 'account' },
  { icon: 'fa-binoculars', title: 'watchlist', id: 3, linkUrl: 'watchlist' },
  { icon: 'fa-chart-line', title: 'stock', id: 4, linkUrl: 'stock' },
  { icon: 'fa-satellite', title: 'news', id: 5, linkUrl: 'news' },
  { icon: 'fa-sliders-h', title: 'settings', id: 6, linkUrl: 'settings' },
];

const menuItemsTwo = [
  {
    icon: 'fas fa-plus-circle fa-lg',
    title: 'buy/sell',
    toggle: true,
    id: 1,
    linkUrl: 'buysell',
  },
  {
    icon: 'fas fa-sign-out-alt fa-lg',
    title: 'sign-out',
    toggle: false,
    id: 2,
    linkUrl: 'signout',
  },
];

export { menuItemsOne, menuItemsTwo };
