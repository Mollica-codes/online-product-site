import React, {useContext} from 'react';
import {Context} from '../Context'
import FilterTypeElements from '../FilterElements/FilterTypeElements';
import FilterPriceElements from '../FilterElements/FilterPriceElements';



function FilterList() {
    const {isProductChecked, isPriceChecked, clearFilter} = useContext(Context)

    return (
        <>
        <h1 className="filter-header">Filter</h1>
        {(isProductChecked || isPriceChecked) && <button onClick={clearFilter}>Clear Filter</button>}
        <p className="filter-subhead">Product Type</p>
        <FilterTypeElements />
        <p className="filter-subhead">Price</p>
        <FilterPriceElements />
        </>
    )
}

export default FilterList;

