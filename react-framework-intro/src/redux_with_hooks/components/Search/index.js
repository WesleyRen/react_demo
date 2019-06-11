import React, { Fragment } from 'react';
import SearchInput from '../SearchInput';
import SearchDisplay from './SearchDisplay';

export default function Index() {
    return (
        <Fragment>
            <SearchInput isQuickSearch={false} />
            <SearchDisplay />
        </Fragment>
    );
}
