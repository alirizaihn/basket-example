import React from 'react';
import Header from '../components/Header/Header';
import FilterView from '../views/FilterView/FilterView';
import ListView from '../views/ListView/ListView';
import BasketView from '../views/BasketView/BasketView';

const Example = () => {
  return (
    <>
     <Header />
     <div className="flex flex-col lg:flex-row items-start  justify-between min-h-screen p-4">
      {/* Left section for filter card */}
      <div className="w-full lg:w-1/5 flex flex-col bg-white rounded-lg shadow-md p-4 lg:p-8 mb-8 lg:mb-0">
        <FilterView/>
        {/* Add filter components here */}
        
      </div>

      {/* Center section for product cards */}
      <div className="w-full lg:w-3/5 flex flex-col lg:flex-row items-start justify-between mb-8 lg:mb-0">
        {/* Add product cards here */}
        <ListView/>
      </div>

      {/* Right section for basket cart */}
      <div className="w-full lg:w-1/5 flex flex-col bg-white rounded-lg shadow-md p-4 lg:p-8">
        {/* Add basket cart components here */}
        <BasketView/>
      </div>
    </div>
     </>
    
  );
};

export default Example;