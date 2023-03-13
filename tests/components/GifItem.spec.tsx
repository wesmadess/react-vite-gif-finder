import React from "react"
import { render, screen } from "@testing-library/react"
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
    const title = 'Saintama';
    const url = 'http://google.com/'

    test('Debe hacer match con el snapshot', () => {
        const {container} = render(<GifItem title={title} url={url} id={1} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} id={1} />);
        // screen.debug();
        const { src, alt }: HTMLInputElement = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('Debe mostrar el título en el componente', () => { 
        render(<GifItem title={title} url={url} id={1} />);
        expect(screen.getByText(title)).toBeTruthy();
     })
})