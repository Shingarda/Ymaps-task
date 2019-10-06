import {ADD_POINT, CHANGE_POINT, DELETE_POINT, UPDATE_LIST} from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_POINT: {
            const { marker } = action.payload,
                id = state.allIds.length + 1;

            return {
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        marker: marker
                    }
                }
            }
        }
        case CHANGE_POINT: {
            const { id, marker } = action.payload;

            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        marker: marker
                    }
                }
            }
        }
        case UPDATE_LIST: {
            const { allIds } = action.payload;

            return {
                ...state,
                allIds: [...allIds]
            }
        }
        case DELETE_POINT: {
            const { id } = action.payload,
                  copyByIds = Object.assign({}, { ...state.byIds });

            delete copyByIds[id];

            for (let index in copyByIds) {
                if (index > id) {
                    copyByIds[index - 1] = copyByIds[index];
                    delete copyByIds[index];
                }
            }

            return {
                allIds: state.allIds.filter(
                    (e) => e !== id
                ).map((e) => e > id ? --e : e),
                byIds: copyByIds
            }
        }
        default:
            return state;
    }
}