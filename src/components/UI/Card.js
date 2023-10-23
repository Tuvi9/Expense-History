import './Card.css'

function Card(props){
    const classes = 'card-expenses ' + props.className
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;