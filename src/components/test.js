import React, { useContext } from 'react';
import xIcon from "../assets/target.svg"
import { FilterContext } from '../utils/filterContext';

const FilterPopOut = () => {
  const { toggleFilterPopout } = useContext(FilterContext);

  return (
    <div className="FilterPopOut">
      <div className="FilterPadding">
        <div className="FilterPopOutHeader">
          <button className="BlackRedButton" onClick="">
            <p className="WhiteBold">Reset All</p>
            <img src={xIcon} className="FilterIcon" alt="Filter" />
          </button>

          <button className="LightRedButton" onClick={toggleFilterPopout}>
            <p className="WhiteBold">Close Filters</p>
            <img src={xIcon} className="FilterIcon" alt="Filter" />
          </button>
        </div>
        <div>Hello</div>
      </div>
    </div>
  );
};

export default FilterPopOut;
