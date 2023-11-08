import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/components/GiftItem";

describe('test GiftItemTest', () => {
    const title = "Hola";
    const urlImg = "https://one-punch.com/saitama.jpg";
    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<GiftItem title={title} url={urlImg} />)


        expect(container).toMatchSnapshot();
    })


    test('DEbe mostrar la URl y el Alt indicado', () => {
        render(<GiftItem title={title} urlImg={urlImg} />)
        // expect(screen.getByRole('img').src).toBe(url);

        const { src, alt } = screen.getByRole('img')
        
        expect(src).toBe(urlImg);
        expect(alt).toBe(alt);

    })

    test('Debe Mostrar el titulo en el componente', () => { 

        render(<GiftItem title={title} url={urlImg} />)
        expect(screen.getByText(title)).toBeTruthy();

     })
});