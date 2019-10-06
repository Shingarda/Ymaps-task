import { ADD_POINT, CHANGE_POINT, DELETE_POINT, UPDATE_LIST } from "./actionTypes";

export const addPoint = marker => ({
    type: ADD_POINT,
    payload: {
        marker
    }
});

export const changePoint = (id, marker) => ({
    type: CHANGE_POINT,
    payload: { id, marker }
});

export const deletePoint = id => ({
    type: DELETE_POINT,
    payload: { id }
});

export const updateList = allIds => {
    return({
        type: UPDATE_LIST,
        payload: { allIds }
    });
};