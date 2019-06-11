import React, { Fragment, useContext } from 'react';

import SearchDisplayList from '../SearchDisplayList';
import { StoreContext } from '../../context/StoreContext';
import { getDocumentByCategory } from '../utils';

export default function SearchDisplay() {
    const { state } = useContext(StoreContext);
    const { categories, documentByCategory } = getAllCat(state);

    return (
        <Fragment>
            {state.searchResult.loading ? <p>Loading....</p> :
                categories.map((cat, index) => (
                    <div>
                        <hr />
                        <h3>{cat}</h3>
                        <hr />
                        <SearchDisplayList resultList={documentByCategory[categories[index]]} showDetail />
                    </div>
                ))}
        </Fragment>
    );
}

function getAllCat(state) {
    let categories = ["DOCUMENT", "RESOURCE"].slice();
    categories = state.searchResult.value.reduce((allCat, item) => {
        if (!categories.includes(item.category)) {
            allCat.push(item.category);
        }
        return allCat;
    }, categories);
    const documentByCategory = getDocumentByCategory(state.searchResult);
    categories.forEach((cat) => {
        if (!documentByCategory[cat]) {
            documentByCategory[cat] = [];
        }
    });
    return { categories, documentByCategory };
}
