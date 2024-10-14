import { mapToFeature } from './mappers.js';

export function loadCompanies(dataManager) {
  return async () => {
    return await dataManager.getCompanies()
      .then(companies => companies.map(mapToFeature));
  }
}
