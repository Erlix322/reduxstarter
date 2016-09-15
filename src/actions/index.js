export const selectUser = (user) => {
    console.log("New click on: "+user.name);
    
    return {
        type:"USER_DELECTED",
        payload:user
    }
};

