


export default function Button({ count, handleClick }: { count: number; handleClick: () => void }) {

    return (
        <>
            <button onClick={handleClick}>I'm a button</button>
            <p>{count}</p>
        </>
    )
}
