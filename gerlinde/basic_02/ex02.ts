
let user = {
    fname: "Gerlinde",
    lname: "Sandmair"
};
console.log(user);
console.log(`${user.fname} und ${user.lname}`);
let user_pos = (document.getElementById("user") as HTMLElement); 
user_pos.innerHTML  = `${user.fname} und ${user.lname}`;