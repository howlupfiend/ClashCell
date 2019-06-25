export default function profileTransformer({
    name, trophies, rank, arena, clan, games, leagueStatistics, currentDeck 
}) {
    const leagueRank = (rank != null) ? rank : "None"
    return {
        name,
        trophies,
        leagueRank,
        arena,
        clan,
        games,
        leagueStatistics,
        currentDeck 
    };
}