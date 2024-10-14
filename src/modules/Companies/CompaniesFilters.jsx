import { useState } from 'react';
import FiltersModal from '../../components/FiltersModal/FiltersModal.jsx';
import { COMPANY_CATEGORIES } from '../../data/consts.js';

function CompaniesFilters({ initialFiltersState, onCloseModal, onApplyFilters }) {
  const [categories, setCategories] = useState(() => {
    const state = {};

    Object.keys(COMPANY_CATEGORIES).forEach(item => (state[item] = false));
    initialFiltersState.categories?.forEach(item => (state[item] = true));

    return state;
  });

  const onCategoryChanged = (category) => {
    setCategories(prevState => ({ ...prevState, [category]: !prevState[category] }));
  };

  const onApplyFiltersInternal = () => {
    const newCategories = Object.keys(categories).filter(key => categories[key]);
    onApplyFilters({
      ...initialFiltersState,
      categories: newCategories.length > 0 ? newCategories : null,
    });
  };

  return (
    <FiltersModal show={true}
                  onCloseModal={onCloseModal}
                  onApplyFilters={onApplyFiltersInternal}
                  title='Фильтр по компаниям'
                  filters={(
                    <form className='min-w-80 pt-4 pb-4'>
                      {Object.keys(COMPANY_CATEGORIES).map(key => (
                        <div key={key} className='pt-1 pb-1'>
                          <label>
                            <input className='mr-2'
                                   type='checkbox'
                                   name={key}
                                   checked={categories[key]}
                                   onChange={() => onCategoryChanged(key)}/>
                            {COMPANY_CATEGORIES[key]}
                          </label>
                        </div>
                      ))}
                    </form>
                  )}/>
  );
}

export default CompaniesFilters;
