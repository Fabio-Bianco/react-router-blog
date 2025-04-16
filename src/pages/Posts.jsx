import { useEffect } from 'react';

const Posts = () => {
  useEffect(() => {
    console.log('📝 Sono la pagina Posts');
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <p>Qui in futuro verranno mostrati i post del nostro blog.</p>
    </div>
  );
};

export default Posts;
