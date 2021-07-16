export const loginValidation = () =>{
    return{
        type:"LOGGEDIN",
    }
}

export const fetchProd = (newProd) => {
    return {
        type:"FETCHGET",
        payload:newProd,
    }
}

export const deletProd = (prodId)=>{
    return {
        type:"DELET",
        payload:prodId,
    }
}

export const getUser = (users)=>{
    return {
        type:"GET",
        payload:users,
    }
}
export const deletUserHandle = (id) => {
    return{
        type:"DELETHANDLE",
        payload:id,
    }
}
// export const addProd = (prodoct)=> {
//     return{
//         type:"ADD",
//         payload:prodoct,
//     }
// }
// export const editProd = (prodoct)=>{
//     return {
//         type:"EDIT",
//         payload:prodoct,
//     }
// } 