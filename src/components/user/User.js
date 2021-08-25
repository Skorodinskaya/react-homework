export default function User({item, userButton}) {
  const userBtn = () => {
    userButton(item)
  }
  return (
    <div>
        {item.id}. {item.name}
      <button onClick={userBtn}>Details</button>

    </div>
  );
}