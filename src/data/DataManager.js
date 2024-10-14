import { COMPANY_CATEGORIES } from './consts.js';

export class DataManager {

  async getCompanies() {
    return import('./companies.json')
      .then(module => module.default)
      .then(companies => {
        return companies.map(company => ({ ...company, category_title: COMPANY_CATEGORIES[company.category] }));
      });
  }

  async getCommunities() {
    return import('./communities.json')
      .then(module => module.default);
  }

  async getCoworkings() {
    return import('./coworkings.json')
      .then(module => module.default);
  }
}
