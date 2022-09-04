import './styles/App.css';
import './styles/PostForm.css';
import './styles/Feed.css';

import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';
import clockIcon from './images/clock.svg';
import emptyFolderIcon from './images/empty-folder.svg';

import {useState} from 'react';

function App() {
    const [history, setHistory] = useState('');
    const [userName, setUserName] = useState('');
    const [posts, setPosts] = useState([]);

    
    function handleSubmit(event){
        event.preventDefault();
        
        setPosts([
          ...posts,  
        {
          id: Math.random(),
          content: history,
          userName: userName,
          publishedAt: new Date(),
        }])

        setHistory('');
        setUserName('');
    }

    return (
        <div className="wrapper">
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
            <main>
                {posts.length == 0 && (
                    <div className='feed-status'>
                        <img src={emptyFolderIcon} alt="Empty folder"></img>
                        
                        <h1>Não encontramos nada</h1>
                        <h2>Parece que voce e seus amigos não postaram nada. Começa a escrever um nova história!</h2>
                    </div>
                )}
                {posts.length > 0 && ( 
                <>
                    <header>
                            <h1>Seu Feed</h1>
                            <h2>Acompanhe o que seus amigos estão pensando em tempo real</h2>
                        </header>
                        <section className='feed'>

                        {posts.map((post) => (

                        <article key={post.id}>
                            <p>
                            {post.content}
                            </p>

                            <footer>
                                <div className='user-details'>
                                    <img src={userIcon} alt="User"/>
                                    <strong>{post.userName}</strong>
                                </div>
                                <div className='time'>
                                    <img src={clockIcon} alt="Clock"></img>
                                    <span>Publicado em {post.publishedAt.toLocaleDateString()}</span>
                                </div>
                            </footer>
                        </article>
                        ))}

                        
                    </section>
                </>
                )}
                
            </main>
        </div>
    );
};

export default App;