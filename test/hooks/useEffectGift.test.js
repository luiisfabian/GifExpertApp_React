import { renderHook, waitFor } from "@testing-library/react";
import { useEffectGift } from "../../src/hooks/useEffectGift";

describe('useEffectGift.js test', () => {
    test('DEbe regresar ele stado inicial', () => {

        const { result } = renderHook(() => useEffectGift('One Punch'))
        const { images, isLoading } = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('DEbe retornar un arreglo de imagenes y el isLoading in false', async () => {

        const { result } = renderHook(() => useEffectGift('One Punch'))


        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),

        );
        const { images, isLoading } = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()

    })
});