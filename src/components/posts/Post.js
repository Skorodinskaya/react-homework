export default function Post({item}) {
  return (
    <div className={'wrapper'}>
      {item.id}. {item.title} - {item.body}

    </div>
  );
}