import React, { Fragment } from 'react';
import { onlyUnique } from './utils';

const MAX_SUMMARY_LENGTH = 200;

export default function SearchDisplayList(props) {
    const { classes, resultList, showDetail } = props;
    if (resultList.length === 0) {
        return null;
    }
    return (
        <ul>
            {
                resultList
                    .filter((item, index, self) => onlyUnique(item, index, self))
                    .map(item => ShowListItem(item, classes, showDetail))
            }
        </ul>
    );
}

export function ShowListItem(item, classes, showDetail) {
    const {
        description, title, url, topics, summary
    } = item;
    const topicString = (topics.length === 0) ? null : `topics: ${topics.join(', ')}`;
    const titleByLocation = (showDetail || title.length <= 43) ? title : `${title.substring(0, 40)}...`;
    const summaryTrimmed = getSummaryTrimmed(summary);

    return (
        <li key={url}>
            <a target='_blank' href={url} rel='noopener noreferrer'>{titleByLocation}</a>
            <Fragment>
                <div>
                    {description}<br />
                    {summaryTrimmed}<br />
                </div>
                {topicString}
            </Fragment>
        </li>
    );
}

export function getSummaryTrimmed(summary) {
    if (!summary) {
        return '';
    }
    let summaryTrimmed = summary;
    if (summary.length > MAX_SUMMARY_LENGTH) {
        summaryTrimmed = summary.substring(0, MAX_SUMMARY_LENGTH);
        summaryTrimmed = `${summaryTrimmed.substring(0, summaryTrimmed.lastIndexOf(' '))} ...`;
    }
    return summaryTrimmed;
}
