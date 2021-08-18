export default function Comment({item}) {
  return (
    <div className={'wrapper'}>
      {item.id}. {item.body}

    </div>
  );
}