export const mapStateToProps = state => {
    const { allIds, byIds } = state.markerReducer || {};

    console.log(allIds);
    console.log(byIds);

    const markers =
        allIds
        && allIds.length > 0
        && byIds
            ? allIds.map(id =>
                (byIds[id] && { ...byIds[id], id} )
            )
            : [];


    return { markers };
};