import {useState} from 'react';

import userIcon from '../images/user.svg';
import paperPlaneIcon from '../images/paper-plane.svg';

import '../styles/PostForm.css';

export default function PostForm(props) {
    const [history, setHistory] = useState('');
    const [userName, setUserName] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        
        props.onSubmit({history, userName});

        setHistory('');
        setUserName('');
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
                <input 
                    value={history}
                    placeholder="Escreva uma nova história..."
                    onChange={(event) => setHistory(event.target.value)}
                />
                <div>
                    <img src={userIcon} alt="userIcon" />

                    <input 
                        value={userName}
                        placeholder="Digite seu nome..."
                        onChange={(event) => setUserName(event.target.value)}
                    />

                    <button type="submit">
                        <img src={paperPlaneIcon} alt="paper-plane" />
                    
                        Publicar
                    </button>
                </div>
            </form>
    )
}