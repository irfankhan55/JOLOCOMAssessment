import * as React from 'react';
import { Dropdown } from '../../components/molecules'
import TestRenderer, { act } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';


describe('DropDown Testing', () => {
    const renderer = new ShallowRenderer();
    const placeholder = 'Select your Langauge'

    const mockCountries = [{ name: 'English (UK)', value: 'en' },
    { name: 'English (US)', value: 'en' },
    { name: 'French ', value: 'fr' },
    { name: 'Danish ', value: 'da' }]
  
    it('Render DropDown without Crashing', () => {
        const component = renderer.render(<Dropdown onSelect={() => { }} placeholder={placeholder} defaultSelected={mockCountries[0]} data={mockCountries} />);
        expect(component).toMatchSnapshot()
    });

    it('DropDown should have correct placeholder', () => {
        const testRenderer = TestRenderer.create(<Dropdown onSelect={() => { }} placeholder={placeholder} defaultSelected={mockCountries[0]} data={mockCountries} />);
        const testInstance = testRenderer.root;
        expect(testInstance.props.placeholder).toBe(placeholder);
    });

    it('DropDown should have correct data', () => {
        const testRenderer = TestRenderer.create(<Dropdown onSelect={() => { }} placeholder={placeholder} defaultSelected={mockCountries[0]} data={mockCountries} />);
        const testInstance = testRenderer.root;
        expect(testInstance.props.data.length).toBe(4);
    });

    it('DropDown should have correct default selected', () => {
        const testRenderer = TestRenderer.create(<Dropdown onSelect={() => { }} placeholder={placeholder} defaultSelected={mockCountries[0]} data={mockCountries} />);
        const testInstance = testRenderer.root;
        expect(testInstance.props.defaultSelected).toBe(mockCountries[0]);
    });
})          