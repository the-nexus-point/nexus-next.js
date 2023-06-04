import Container from "./shared/Container";
import Post from "./shared/Post";

const Feed = () => {
  return (
    <Container activeRoute="feed">
      <div className="p-20">
        <Post username="JohnDoe" content="This is the first post" />
      </div>
      <div className="p-20">
        <Post username="JaneSmith" content="This is the second post" />
      </div>
      <div className="p-20">
        <Post username="MarkJohnson" content="This is the third post" />
      </div>
      <div className="p-20">
        <Post username="EmilyDavis" content="This is the fourth post" />
      </div>
    </Container>
  );
};

export default Feed;
