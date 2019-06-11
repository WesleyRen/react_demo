import React from 'react';
import { shallow } from 'enzyme';

import { InputField } from '../SearchInput';

describe('SearchInput', () => {

    it('InputField renders an InputBase, no matter isQuickSearch or not', () => {
        const wrapper = shallow(<InputField />);
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(1);

        const wrapper1 = shallow(<InputField />);
        expect(wrapper1.find('div')).toHaveLength(1);
        expect(wrapper1.find('input')).toHaveLength(1);
    });
});
