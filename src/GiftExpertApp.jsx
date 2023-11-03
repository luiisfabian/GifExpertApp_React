import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
        // setCategories(cat => [...cat, 'valorant'])
    }
    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory
                //  setCategories={setCategories}
                onNewCategory={event => onAddCategory(event)}
            />

            {categories.map((caterory, i) =>
                <GifGrid key={caterory} category={caterory} />
                // <li key={i}>{caterory}</li>
            )}
            {/* {lsitado de gifts}
    {gift items} */}
        </>
    )
}
