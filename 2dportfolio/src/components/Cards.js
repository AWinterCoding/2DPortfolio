const Cards = (props) => {

    const items = props.items;

    return (
        <div className="cardList">
        {items.map((item) => (
            <div className="itemCard" key={item.id}>
            <img src={item.imgLink} alt={item.alt}/>
            <h3>{item.itemName}</h3>
            <h4>{item.contributors}</h4>
            <p>{item.description}</p>
            <a><p>{item.itemLink}</p></a>
            </div>
        ))}
        </div>
    );
}
 
export default Cards;