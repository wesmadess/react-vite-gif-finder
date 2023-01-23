import { useState } from 'react';
export const AddCategory = ({ onNewCategory }: any) => {
  
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}: any) => {
        setInputValue(target.value)
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value= { inputValue }
                onChange={onInputChange}
            />
        </form>
  )
}
