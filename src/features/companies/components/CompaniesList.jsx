import { memo } from 'react';
import { EmptyList } from '../../../components';
import CompanyCard from './CompanyCard.jsx';

const CompaniesList = memo(function CompaniesList({ companies, onResetFilters }) {
  return (
    <div className='p-4'>
      {companies && companies.length > 0
        ? (
          <div className='flex flex-wrap -m-4'>
            {companies.map((item, index) => (
              <div key={index} className='w-full p-2 sm:w-1/1 md:w-1/2'>
                <a href={item.company.link} target='_blank'>
                  <CompanyCard name={item.company.name}
                               address={item.company.address}
                               category={item.company.category_title}
                               flagship={item.company.flagship}
                               description={item.company.description} />
                </a>
              </div>
            ))}
          </div>
        )
        : (
          <div className='flex justify-center pt-16'>
            <EmptyList onResetFilters={onResetFilters}/>
          </div>
        )
      }
    </div>
  );
});

export default CompaniesList;
