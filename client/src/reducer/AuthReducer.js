export const AuthReducer = (state, { type, payload }) => {
   switch (type) {
      case 'SET_USER_LOGIN':
         return {
            ...state,
            token: payload,
         };

      case 'SET_USER_LOGOUT':
         return {
            ...state,
            token: '',
         };

      case 'SET_USER_DETAILS':
         return {
            ...state,
            user: payload.user,
         };

      default:
         break;
   }
};
