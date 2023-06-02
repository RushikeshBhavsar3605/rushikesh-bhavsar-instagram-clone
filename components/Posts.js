import { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import { useRecoilState } from "recoil";
import { searchState } from "@/atoms/modalAtom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchString, setSearchString] = useRecoilState(searchState);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts.map((post) => {
        if (
          searchString &&
          !post
            .data()
            .username.toLowerCase()
            .includes(searchString.toLowerCase())
        )
          return null;

        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
          />
        );
      })}
    </div>
  );
}

export default Posts;
