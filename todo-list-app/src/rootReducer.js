const initialState = { todos: [
    {idx: 0, title: "dog", description: "walk the dog, now!", isCompleted: false, isUnderEdit: false},
    {idx: 1, title: "laundry", description: "do the laundry", isCompleted: true, isUnderEdit: false},
    {idx: 2, title: "reset test", description: "reset the last test", isCompleted: false, isUnderEdit: false}
] }

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'MOD_TODO':
            var newState = { todos: [...action.payload] };
            return newState;
        case 'ADD_TODO':
            var newState = { todos: [ action.payload, ...state.todos ] };
            return newState;
        default:
            return state;
    }
}