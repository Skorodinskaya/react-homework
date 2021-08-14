export default function User({item, userPostBTN}) {
    const onClickUserPost = () => {
        userPostBTN(item)
    }

    return (
    <div>
      {item.id}. {item.name} - {item.username}
      <button onClick={onClickUserPost}>posts</button>
    </div>
  );
}