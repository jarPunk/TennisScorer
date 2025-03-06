function obtenerScore(score1, score2) {
    const scores = ["0", "15", "30", "40"];
    if (score1 === 0 && score2 === 0) {
        return "love,love";
    }
    return `${scores[score1] || "0"} - ${scores[score2] || "0"}`;
}

export default obtenerScore;
