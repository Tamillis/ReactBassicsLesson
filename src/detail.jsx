export default function Detail({ index, title, body }) {
    console.log(index, title, body);
    return (
        <div key={index}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        );
}