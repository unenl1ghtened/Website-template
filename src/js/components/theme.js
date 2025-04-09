/* eslint-disable prettier/prettier */
export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  // const themeSwitcher = document.querySelector('[data-theme-switcher]');

  const themeTargetDataSet = themeTarget.dataset;

  const theme = localStorage.getItem('theme') || 'dark';
  themeTargetDataSet.theme = theme;

  // if (theme === 'dark') {
  //   themeSwitcher.checked = true;
  // }

  // themeSwitcher.addEventListener('click', () => {
  //   if (themeTargetDataSet.theme == 'light') {
  //     themeTargetDataSet.theme = 'dark';
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     themeTargetDataSet.theme = 'light';
  //     localStorage.setItem('theme', 'light');
  //   }
  // });
};
