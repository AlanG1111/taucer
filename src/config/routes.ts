/**
 * @description Enum containing routes to all pages rendered by react-router
 */

export enum Routes {
  Root = '/',
  About = '/about',
  Contacts = '/contacts',
  SchoolLife = '/school-life',
  Preschool = '/elementary-grades/preschool',
  ElementarySchool = '/elementary-grades/elementary',
  ElementarySchoolGrades = '/elementary-grades',
  HighSchool = '/high',
  OnlineSchool = '/online',
  Boarding = '/boarding',
  HorseClub = '/horseClub',
}

const routes = [
  { route: Routes.ElementarySchoolGrades, label: 'Школа 0-4 класи', type: 'school' },
  { route: Routes.HighSchool, label: 'Школа 5 - 11 клас', type: 'school' },
  { route: Routes.Boarding, label: 'Бординг', type: 'school' },
  { route: Routes.OnlineSchool, label: 'Online школа', type: 'school' },
  { route: Routes.Preschool, label: 'Табір', type: 'school' }, //TODO: change link
  { route: Routes.About, label: 'Про нас', type: 'basic' },
  { route: Routes.Contacts, label: 'Контакти', type: 'basic' },
  { route: Routes.SchoolLife, label: 'Життя школи', type: 'basic' },
];

export const schoolRoutes = routes.filter((route) => route.type === 'school');
export const basicRoutes = routes.filter((route) => route.type === 'basic');
