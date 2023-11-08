import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useEffectGift } from "../../src/hooks/useEffectGift";
jest.mock("../../src/hooks/useEffectGift")

describe('GifGrid.jsx test', () => {

    const category = "Goku";

    test('DEbe de mostrar el loading inicialmente', () => { 


      useEffectGift.mockReturnValue({
        images: [],
        isLoading: true,
      });
        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando'));
        expect(screen.getByText(category));
     })

     test('DEbe mostrar las imagenes cuando se cargan las imagenes en el useFetchGift', () => { 
      const gifs = [{
        id: "ABC",
        title: "Goki",
        url: "https://google.com/"
      },
      {
        id: "DEF",
        title: "GokU",
        url: "https://google.com/KOKU"
      }]

      useEffectGift.mockReturnValue({
        images: gifs,
        isLoading: false,
      });
        render(<GifGrid category={category}/>)

        expect(screen.getAllByRole('img').length).toBe(2)

      })
});