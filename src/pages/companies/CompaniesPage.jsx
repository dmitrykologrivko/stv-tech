import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle.js';
import { SearchInput, IconButton } from '../../components';
import { Companies, CompaniesFilters } from '../../features/companies';
import filterIcon from '../../assets/filter.svg';
import listIcon from '../../assets/list.svg';
import mapIcon from '../../assets/map.svg';

function CompaniesPage() {
  useTitle('IT-Карта Ставрополя');

  const getDefaultSearchParams = () => ({ query: '' });
  const companies = useLoaderData();
  const [searchParams, setSearchParams] = useState(getDefaultSearchParams);
  const [showFilters, setShowFilters] = useState(false);
  const [showMap, setShowMap] = useState(true);

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

      <Companies companies={companies}
                 searchParams={searchParams}
                 showMap={showMap}
                 onResetFilters={onResetFilters} />

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
