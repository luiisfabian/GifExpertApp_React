import { fireEvent, render, screen } from "@testing-library/react";
import { GiftExpertApp } from "../src/GiftExpertApp";

describe('GiftExpertApp.jsx test', () => {

    const inputValue = "Goku";
    test('añadoir una categora no existente', () => {

        const container = render(<GiftExpertApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);


        fireEvent.input(input, { target: { value: inputValue + "d"}})
        fireEvent.submit(form);

        expect( screen.getByText('Goku') ).toBeTruthy();

    })

    // test('una categoria existente', () => {

    //     const {container} = render(<GiftExpertApp />)

    //     const input = screen.getByRole('textbox')
    //     const form = screen.getByRole('form')

    //     fireEvent.input(input, { target: { value: inputValue } })
    //     fireEvent.submit(form);


    //     fireEvent.input(input, { target: { value: inputValue + "d"}})
    //     fireEvent.submit(form);

    //     expect( container.length ).toBe(1);

    // })
});