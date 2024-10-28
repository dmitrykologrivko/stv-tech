import CompanyCard from './CompanyCard.jsx';

export default {
  title: 'Companies/CompanyCard',
  component: CompanyCard
}

export const Default = () => (
  <CompanyCard className={'w-80 p-2'}
               name='Хорошая IT Компания'
               address='Улица Ленина, 999 1 этаж'
               description='Веб и мобильная разработка. Проекты любой сложности.'
               category='Web-студия'
               flagship />
);
