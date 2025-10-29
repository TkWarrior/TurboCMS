
const listOfAdmins = [
    "talibulhaque369@gmail.com",
    // "talib@gmail.com",
    "abc@gmail.com",
    "xyz@gmail.com"
]

export default async function isAdmin(session){
    if(!session) return false;
    let userEmail =  session.user?.email?.toLowerCase().trim();

    let emailMatch = listOfAdmins.some((singleEmail) => {
      return singleEmail.toLowerCase().trim() === userEmail;
    });

    console.log("email match" , emailMatch)
    if((session.user?.role == 'admin') || (session.user?.email && emailMatch)){
        return true;
    }

    return false;
}