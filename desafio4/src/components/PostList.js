import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Vitor Coelho',
          avatar: 'https://i.pravatar.cc/150?img=2'
        },
        date: '16 Oct 2019',
        content: 
          'Post principal com comentário muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito grande',
        comments: [
          {
            id: 2,
            author: {
              name: 'Gabriela Benedito',
              avatar: 'https://i.pravatar.cc/150?img=1'
            },
            date: '16 Oct 2019',
            content:
              'Comentário do post com comentário muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito muito grande'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Marcelo Coelho',
          avatar: 'https://i.pravatar.cc/150?img=3'
        },
        date: '16 Oct 2019',
        content: 'Post principal com comentário pequeno',
        comments: [
          {
            id: 4,
            author: {
              name: 'Rafaela Benedito',
              avatar: 'https://i.pravatar.cc/150?img=4'
            },
            date: '16 Oct 2019',
            content: 'Comentário do post com comentário pequeno'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;