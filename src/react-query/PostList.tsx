import React from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => setPosts(res.data))
  //     .catch((error) => setError(error));
  // }, []);

  const pageSize = 10;
  // const [userId, setUserId] = useState<number>();
  // const [page, setPage] = useState(1);
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize: pageSize });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <select
        value={userId}
        onChange={(e) => setUserId(+e.target.value)}
        className="form-select mb-3">
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select> */}
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      {/* <button
        disabled={page == 1}
        onClick={(e) => setPage(page - 1)}
        className="btn btn-primary mt-2 ">
        Previous
      </button> */}
      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="btn btn-primary mt-2 ms-2">
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;

