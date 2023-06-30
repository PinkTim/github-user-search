export const initialState = [];

export function tasksReducer(state, action) {
    switch (action.type) {
        case "added": {
            const newstate = [...state];
            let index = newstate.findIndex(
                (user) => user.id === action.data.id
            );
            if (index >= 0) {
                let oldUser = newstate.splice(index, 1)[0];
                newstate.push(oldUser);
            } else if (newstate.length > 4) {
                newstate.shift();
                newstate.push({
                    id: action.data.id,
                    data: action.data,
                });
            } else {
                newstate.push({
                    id: action.data.id,
                    data: action.data,
                });
            }
            return newstate;
        }
        case "delete": {
            return state.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}
