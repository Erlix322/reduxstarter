export default function(state={},action){
     switch(action.type){
         case 'USER_DELECTED':
         return action.payload;
     }
     return state;
}