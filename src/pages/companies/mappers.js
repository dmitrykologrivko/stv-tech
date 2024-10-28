export function mapToFeature(company) {
  return {
    type: 'feature',
    id: company.id,
    title: company.name,
    geometry: {
      type: 'Point',
      coordinates: company.coordinates
    },
    company
  };
}
