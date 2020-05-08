import React, {useState} from 'react';

const ImageSearch = ({search}) => {
    
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        search(text);
    }
    return (
        <div className="max-w-sm rouded overflow-hidden my-10 mx-auto">
            <form 
                className="w-full max-w-sm"
                onSubmit={onSubmit}
            >
                <div className="flex items-center border-b border-b-2">
                    <input 
                        type="text" 
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                        type="text" 
                        placeholder="Search Image Term..."
                        onChange={onChange}
                    />
                    <button 
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" 
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch