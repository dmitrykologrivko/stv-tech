import { useMemo, useRef, useDeferredValue } from 'react';
import useAvailableHeight from '../../hooks/useAvailableHeight.js';
import { all } from '../../utils/preconditions.js';
import { STAVROPOL_CENTER } from '../../data/consts.js';
import CompaniesMap from './components/CompaniesMap.jsx';
import CompaniesList from './components/CompaniesList.jsx';

function Companies({ companies, searchParams, showMap, onResetFilters }) {
  const mapRef = useRef();

  const availableHeight = useAvailableHeight(mapRef);

  const deferredSearchParams = useDeferredValue(searchParams);

  const filteredCompanies = useMemo(() => {
    const queryLowerCase = deferredSearchParams.query?.toLowerCase() || '';

    return companies.filter(item => {
      const conditions = [];

      if (queryLowerCase) {
        conditions.push(
          item.company?.name.toLowerCase().includes(queryLowerCase)
        );
      }
      if (deferredSearchParams?.categories) {
        conditions.push(
          deferredSearchParams.categories.includes(item.company?.category)
        );
      }

      return conditions.length > 0 ? all(conditions) : true;
    });
  }, [companies, deferredSearchParams]);

  return (
    <>
      {showMap && (
        <div ref={mapRef}
             className={`'w-full rounded-lg overflow-hidden shadow'`}
             style={{ height: availableHeight }}>
          <CompaniesMap cityLocation={STAVROPOL_CENTER} companies={filteredCompanies}/>
        </div>
      )}

      {!showMap && (
        <CompaniesList companies={filteredCompanies} onResetFilters={onResetFilters}/>
      )}
    </>
  );
}

export default Companies;
