export const handleResponse = async (response) => {
  
  if (response.ok) {
    
    return await response.json();
  }

  if (response.status === 400) {
   
    const error = await response.text();
    throw new Error(error);
  }
  
  if(response.status === 401){
    throw new Error("Not Authorized");
  }
  
   throw new Error("Network response not ok");
};

export const handleError = (error) => {
  console.log(error)
  throw error;
};

export const authHeader = () => {
  return {
    "content-type": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("token")
  }
}