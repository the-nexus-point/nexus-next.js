import Container from "./shared/Container";
import Post from "./shared/Post";

const Feed = () => {
  return (
    <Container activeRoute="feed">
      <div className="flex flex-col space-y-1">
        <Post
          username="harsh.2125csai1044"
          content="This is the first post, which is going to be tested"
        />
        <Post
          username="harshit.2125csai1066"
          content="Bigger post to judge. Lorem Ipsum is simply dummy text of 
          the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a 
          galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <Post username="nandini.2125cse1064" content="This is the post" />
        <Post username="riya.2125it3302" content="This is the post" />
        <Post username="priyanshu.2125cse10" content="I am a dev-14." />
      </div>
    </Container>
  );
};

export default Feed;
