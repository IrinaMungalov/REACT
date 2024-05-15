// TODO: make the style more compact
const Button = ({ text,color,backgroundColor }) => {

    let asc = true

    return (
        <button 

            style={{
                color,
                backgroundColor
            }}

            onClick={ () => { 
                asc = !asc 
                console.log(asc)
            } }
        
        
        >
            {text} { asc ? '^' : 'v'}
        </button>
    )
}

export {Button}