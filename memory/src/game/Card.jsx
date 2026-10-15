// Card.js
//working of individual cards like the ability to toggle or flip and there design
//is carried out in this file
function Card({ item, handleSelectedCards, toggled, stopflip }) {
    return (
        <div className="item">
            <div className={toggled ? "toggled" : ""}>
                <img className="face" src={item.img} alt={item.name} />
                <button
                    type="button"
                    aria-label={`Reveal ${item.name} card`}
                    disabled={stopflip || toggled}
                    className="back"
                    onClick={() => !stopflip && handleSelectedCards(item)}
                >
                    <span className="sr-only">Reveal card</span>
                </button>
            </div>
        </div>
    );
}

export default Card;
