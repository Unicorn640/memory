import { useEffect, useRef, useState } from "react";
import Data from "./Data";
import Card from "./Card";

function shuffleCards(cards) {
    const shuffled = cards.map((card) => ({ ...card, flipped: false }));

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[index],
        ];
    }

    return shuffled;
}

function GameBoard() {
    const [cardsArray, setCardsArray] = useState(() => shuffleCards(Data));
    const [moves, setMoves] = useState(0);
    const [firstCard, setFirstCard] = useState(null);
    const [stopFlip, setStopFlip] = useState(false);
    const [won, setWon] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

    function resetGame() {
        window.clearTimeout(timeoutRef.current);
        setCardsArray(shuffleCards(Data));
        setMoves(0);
        setFirstCard(null);
        setStopFlip(false);
        setWon(0);
    }

    function handleSelectedCards(selectedCard) {
        if (stopFlip) return;

        const card = cardsArray.find(({ id }) => id === selectedCard.id);
        if (!card || card.flipped || card.matched) return;

        setCardsArray((cards) =>
            cards.map((item) =>
                item.id === card.id ? { ...item, flipped: true } : item,
            ),
        );

        if (!firstCard) {
            setFirstCard(card);
            return;
        }

        setStopFlip(true);
        setMoves((count) => count + 1);

        const isMatch = firstCard.name === card.name;
        if (isMatch) {
            setCardsArray((cards) =>
                cards.map((item) =>
                    item.id === firstCard.id || item.id === card.id
                        ? { ...item, flipped: true, matched: true }
                        : item,
                ),
            );
            setWon((count) => count + 1);
        }

        timeoutRef.current = window.setTimeout(() => {
            if (!isMatch) {
                setCardsArray((cards) =>
                    cards.map((item) =>
                        item.id === firstCard.id || item.id === card.id
                            ? { ...item, flipped: false }
                            : item,
                    ),
                );
            }
            setFirstCard(null);
            setStopFlip(false);
        }, 700);
    }

    const hasWon = won === Data.length / 2;

    return (
        <main className="container">
            <header className="header">
                <h1>Memory Game</h1>
                <p className="moves">Moves: {moves}</p>
                <button className="button" onClick={resetGame} type="button">
                    New game
                </button>
            </header>
            <section className="board" aria-label="Memory game cards">
                {cardsArray.map((item) => (
                    <Card
                        key={item.id}
                        item={item}
                        handleSelectedCards={handleSelectedCards}
                        toggled={item.flipped || item.matched}
                        stopflip={stopFlip}
                    />
                ))}
            </section>
            <p className="comments" aria-live="polite">
                {hasWon
                    ? `You won in ${moves} moves!`
                    : `${won} of ${Data.length / 2} pairs found`}
            </p>
        </main>
    );
}

export default GameBoard;