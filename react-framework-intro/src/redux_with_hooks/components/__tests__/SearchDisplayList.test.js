import { shallow } from 'enzyme';

import { getSummaryTrimmed, SearchDisplayList, ShowListItem } from '../SearchDisplayList';
import { MAX_SUMMARY_LENGTH } from '../../config';

describe('SearchDisplayList', () => {
    it('getSummaryTrimmed returns a string as is when < MAX_SUMMARY_LENGTH in config.js', () => {
        const inputStr = 'some string';
        const outputStr = getSummaryTrimmed(inputStr);
        expect(outputStr).toEqual(inputStr);
    });

    it('getSummaryTrimmed trims a long string to be MAX_SUMMARY_LENGTH in config.js', () => {
        const inputStr = 'some string '.repeat(100);
        expect(inputStr.length).toBeGreaterThan(MAX_SUMMARY_LENGTH);
        const outputStr = getSummaryTrimmed(inputStr);
        expect(outputStr.length).toBeLessThan(MAX_SUMMARY_LENGTH + 3);
        expect(inputStr.startsWith(outputStr.substring(0, outputStr.length - 3)));
    });

    it('ShowListItem renders a ListItem with ListItemText as child', () => {
        const description = 'a desc'; const summary = 'a sum'; const title = 'a title'; const url = 'url'; const
            topics = [ '1', '2' ];
        const item = {
            description, summary, title, url, topics
        };
        const wrapper = shallow(ShowListItem(item, {}, true));
        expect(wrapper.find('ForwardRef(ListItem)')).toHaveLength(1);
        expect(wrapper.find('ForwardRef(ListItem)').dive().find('WithStyles(ForwardRef(ListItemText))')).toHaveLength(1);
    });

    it('SearchDisplayList renders a List with ListItem as children', () => {
        const description = 'a desc'; const summary = 'a sum'; const title = 'a title'; const url = 'url'; const
            topics = [ '1', '2' ];
        const item = {
            description, summary, title, url, topics
        };
        const item2 = {
            description, summary, title: `${title}2`, url: `${url}2`, topics
        };
        const wrapper = shallow(SearchDisplayList({ classes: {}, resultList: [ item, item2 ], showDetail: true }));
        expect(wrapper.find('ForwardRef(List)')).toHaveLength(1);
        expect(wrapper.find('ForwardRef(List)').dive().find('WithStyles(ForwardRef(ListItem))')).toHaveLength(2);
    });
});
