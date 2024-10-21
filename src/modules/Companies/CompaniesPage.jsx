import { useState, useMemo, useRef, useDeferredValue } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle.js';
import useAvailableHeight from '../../hooks/useAvailableHeight.js';
import { all } from '../../utils/preconditions.js';
import { STAVROPOL_CENTER } from '../../data/consts.js';
import SearchInput from '../../components/SearchInput/SearchInput.jsx';
import IconButton from '../../components/IconButton/IconButton.jsx';
import CompaniesMap from '../../components/CompaniesMap/CompaniesMap.jsx';
import filterIcon from '../../assets/filter.svg';
import listIcon from '../../assets/list.svg';
import mapIcon from '../../assets/map.svg';
import CompaniesFilters from './CompaniesFilters.jsx';
import CompaniesList from './CompaniesList.jsx';

function CompaniesPage() {
  useTitle('IT-Карта Ставрополя');

  const getDefaultSearchParams = () => ({ query: '' });
  const mapRef = useRef();
  const companies = useLoaderData();
  const availableHeight = useAvailableHeight(mapRef);
  const [searchParams, setSearchParams] = useState(getDefaultSearchParams);
  const [showFilters, setShowFilters] = useState(false);
  const [showMap, setShowMap] = useState(true);

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

  const onSearchInputChange = (query) => {
    setSearchParams(prevState => ({ ...prevState, query }));
  };
  const onFilterButtonClick = () => setShowFilters(true);
  const onCloseFilters = () => setShowFilters(false);
  const onResetFilters = () => setSearchParams(getDefaultSearchParams);

  return (
    <div className='p-4'>
      <div className='pb-4 flex gap-1'>
        <SearchInput value={searchParams.query}
                     onChange={onSearchInputChange}
                     placeholder='Введите название компании'/>

        <IconButton icon={showMap ? listIcon : mapIcon}
                    onClick={() => setShowMap(prevState => !prevState)} />
        <IconButton icon={filterIcon} onClick={onFilterButtonClick}/>
      </div>

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

      {showFilters && (
        <CompaniesFilters show={showFilters}
                          initialFiltersState={searchParams}
                          onCloseModal={onCloseFilters}
                          onApplyFilters={newFiltersState => {
                            setSearchParams(newFiltersState);
                            setShowFilters(false);
                          }}/>
      )}
    </div>
  );
}

export default CompaniesPage;
