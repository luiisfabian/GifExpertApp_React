import { getGifts } from "../../src/helpers/GetGifs";

describe('getGifs.js pruebas', () => {
    test('debe retornar un arreglo de gifs', async () => { 

        const gift = await getGifts('Goku')
        expect(gift.length).toBeGreaterThan(0)
        expect(gift[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            urlImg: expect.any(String)
        })
     })
});