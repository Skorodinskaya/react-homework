import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../services/user.service";
import Comment from "../comments/Comment";

export default function Comments({id}) {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsOfPost(id).then(value => setComments([...value]))
    }, [id])
  return (
    <div>
        <p>Comments of the post #{id}: </p>
        {
            comments.map(value => <Comment key = {value.id} item={value}/>)
        }

    </div>
  );
}