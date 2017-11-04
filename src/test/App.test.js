import WeatherInfo from '../components/WeatherInfo';
import WeatherBoard from '../components/WeatherBoard';
import WeatherQuery from '../components/WeatherQuery';
import Utility from '../lib/Utility';

import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-15";

Enzyme.configure({ adapter: new Adapter() });  

describe('Rendering components', () => {
    test('WeatherBoard Component is rendered', () => {
        const title = 'Weather Information';
        const box = mount(
            <WeatherBoard cities='Sydney, Melbourne' />
        );
        const item = box.find('.weather-title');
        expect(item.text().trim()).toBe(title);
    });

    test('WeatherQuery Component is rendered', () => {
        const title = 'Submit';
        const box = mount(
            <WeatherQuery cities='' />
        );
        const item = box.find('a.button');
        expect(item.text().trim()).toBe(title);
    });

    test('WeatherInfo Component is rendered', () => {
        const title = 'Submit';
        const weather = {
            city: 'Sydney',
            temperature: '20',
            condition: 'Sunny'
        };
        const box = mount(
            <WeatherInfo {...weather} />
        );
        const item = box.find('.info-row');
        expect(item.children().length).toBe(3);
        expect(item.childAt(0).text().trim()).toBe('Sydney');
        expect(item.childAt(1).text().trim()).toContain('20');
        expect(item.childAt(2).text().trim()).toBe('Sunny');
    });
});



