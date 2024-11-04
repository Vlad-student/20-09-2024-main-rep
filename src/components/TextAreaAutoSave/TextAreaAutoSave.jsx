import {useState , useEffect} from 'react';

const TextAreaAutoSave = () => {
const [text, setText] = useState('');
const changeText = (event) => {
    setText(event.target.value)
}
useEffect(() => {
    localStorage.setItem('saveText', text)
}, []);
    return (
        <section>
            <textarea name="" id="" rows ='5' cols = '40' value={text}
            onChange={changeText} ></textarea>
        </section>
    );
}

export default TextAreaAutoSave;
