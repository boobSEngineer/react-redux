const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CONVERSATION = 'SET-CONVERSATION';

let initialState = {
    conversation: []
};

const conversationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                conversation: state.conversation.map(c => {
                    if (c.id === action.conversationId) {
                        return {...c, followed:true};
                    }
                    return c;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                conversation: state.conversation.map(c => {
                    if (c.id === action.conversationId){
                        return {...c, followed:false};
                    }
                    return c;
                }),
            };
        case SET_CONVERSATION:
            return {
                ...state,
                conversation: [...state.conversation, ...action.conversations]
            };
        default:
            return state;
    }
}
export const followCreate = (conversationId) => {return {type: FOLLOW, conversationId}};

export const unfollowCreate = (conversationId) => {return {type: UNFOLLOW, conversationId}};

export const conversationSetCreate = (conversations) => {return {type: SET_CONVERSATION, conversations}};




export default conversationReducer;
