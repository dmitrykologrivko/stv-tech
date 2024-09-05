export class DataManager {

  async getCommunities() {
    return import('./communities.json')
      .then(module => module.default);
  }

  async getCoworkings() {
    return import('./coworkings.json')
      .then(module => module.default);
  }
}
