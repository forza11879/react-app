const menuItemsOne = [
  { icon: 'fa-bars', title: 'Options', id: 1 },
  { icon: 'fa-folder-open', title: 'Account', id: 2 },
  { icon: 'fa-binoculars', title: 'Watchlist', id: 3 },
  { icon: 'fa-chart-line', title: 'Stocks', id: 4 },
  { icon: 'fa-satellite', title: 'News', id: 5 },
  { icon: 'fa-sliders-h', title: 'Settings', id: 6 },
];

const menuItemsTwo = [
  { icon: 'fas fa-plus-circle fa-lg', title: 'Buy/Sell', toggle: true, id: 1 },
  {
    icon: 'fas fa-sign-out-alt fa-lg',
    title: 'Sign-out',
    toggle: false,
    id: 2,
  },
];

export { menuItemsOne, menuItemsTwo };
