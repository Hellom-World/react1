import { useState } from 'react';

import Feed from '../components/Feed';
import PostForm from '../components/PostForm';

export default function Home() {
    const [posts, setPosts] = useState([]);

    
    function handleSubmit({history, userName}){
        setPosts([
          ...posts,  
        {
          id: Math.random(),
          content: history,
          userName: userName,
          publishedAt: new Date(),
        }])
    }

    return (
        <>
            <PostForm onSubmit={handleSubmit} />
            <main>
                <Feed 
                    posts={posts} 
                    title="Meu feed"
                    subtitle="Acompanhe o que seus amigos estão pensando em tempo real"
                />
            </main>
        </>
    );
}