export default function profileTransformer({
    name, trophies, rank, arena, clan,
}) {
    const leagueRank = (rank != null) ? rank : "None"
    return {
        name,
        trophies,
        leagueRank,
        arena,
        clan,
    };
}