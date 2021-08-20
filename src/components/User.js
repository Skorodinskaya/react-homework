export default function User({item, history}) {
  const navigateTo =  () => {
    history.push(`/users/${item.id}`)
  }
  return (
    <div>
      {item.id}. {item.name} - {item.username}
     <button onClick={navigateTo}>Get info</button>

    </div>
  );
}