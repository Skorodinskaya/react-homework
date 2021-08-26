export default function ({item, carButton}) {
    const carBtn = () => {
        carButton(item)
    }
    return (
        <div>
            {item.id}. {item.model}
            <button onClick={carBtn}>Details</button>
        </div>
    );
}