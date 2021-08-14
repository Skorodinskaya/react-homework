import Posts from "../posts/Posts";


export default function User({item}) {

  return (
    <div>
    <h2>{item.id}. {item.name} - {item.username} </h2>
      <Posts id = {item.id}/>
    </div>
  );
}