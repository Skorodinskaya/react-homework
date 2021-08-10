export default function Simpson({name, surname, age, info, image}) {
    return (
        <div>
            <h2>{name} {surname}. Age - {age}</h2>
            <p> {info}</p>
            <img src={image} alt=""/>

        </div>
    );
}