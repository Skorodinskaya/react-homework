export default function CarForEdit({item, editButton, deleteButton}) {
    const editBtn = () => {
        editButton(item)
    }
    const deleteBth = () => {
        deleteButton(item.id)
    }
    return (
        <div>
            {item.id}. {item.model}. Price - {item.price}. Year - {item.year}
            <button onClick={editBtn}>Edit</button>
            <button onClick={deleteBth}>Delete</button>

        </div>
    );
}