export default (state = {}, action) => {
    switch (action.type) {
        case 'Logged': {
            console.log(123456789, action.payload);
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
