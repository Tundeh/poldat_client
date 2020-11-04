export const loggedIn = () => {
 const token = localStorage.getItem("token");
 if(token){
   return true;
 }
 return false;
}

export const isAdmin = () => {
  const token = localStorage.getItem("token");
  if(token){
   const userType = JSON.parse(token.split(".")[1].atob()).user_type;
   if(userType === "admin"){
     return true;
   }
   else {
     return false;
   }
  }
  return false;
}

