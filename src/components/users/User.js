import './Style.css'
export default function User({item}) {
  return (
    <div className={'wrapper'}>
      {item.id}. {item.name}. Usersname - {item.username}
    </div>
  );
}