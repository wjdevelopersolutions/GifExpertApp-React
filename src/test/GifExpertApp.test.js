import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Probando el componente <GifExpertApp />', () => {

    test('Se debe imprimir en el h2 Gif expert app', () => {

        const message = 'Gif expert app';
        const wrapper = shallow( <GifExpertApp /> );
        const h2Content = wrapper.find('h2').text();

        expect(h2Content).toBe(message);
    })
})
