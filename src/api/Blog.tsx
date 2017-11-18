import Post from '../interfaces/Post';

class BlogApi {
    getPosts() {
        return new Promise <Post[]> ((resolve, reject) => {
            
            fetch('/api/blog/posts.json')
                .then((response: Response) => response.json())
                .then((response: Post[]) => {
                    let posts: Post[] = [];

                    for (let i in response) {
                        if (response[i].hasOwnProperty('url')) {
                            let post: Post = response[i];
                            
                            posts.push({
                                url: post.url,
                                photo: post.photo,
                                category: post.category,
                                title: post.title,
                                intro: post.intro
                            });
                        }

                    }
                    resolve(posts);
                }
            );
        });
    }
}

export default BlogApi;