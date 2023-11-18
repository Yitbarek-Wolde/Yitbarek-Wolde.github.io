//The following objects record the season statistics for players on a basketball team.
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
export const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
export const teamStats = [player1, player2, player3];
export function findTotalPlayerPoints(player3) {
    let OverallPoints = player3.stats.map((results) => results.points);
    let SumTotal = OverallPoints.reduce((sum, point) => sum += point);
    return SumTotal;
}
export function findTotalPointsByJersey(num) {
    const player = teamStats.find((player) => player.jersey === num);
    if (!player) {
        return 0;
    }
    return player.stats.reduce((sum, { points }) => sum + points, 0);
}
export function findTotalScores(teamStats) {
    return teamStats.map(({ jersey, stats }) => ({
        jersey,
        total: stats.reduce((sum, { points }) => sum + points, 0),
    }));
}
