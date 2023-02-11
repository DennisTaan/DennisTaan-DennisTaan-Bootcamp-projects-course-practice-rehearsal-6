function fetchUser() {
  showSpinner();
  fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then((data) => {
      hideSpinner()
     displayUser(data.results[0]);
      
    });
}

function displayUser(user) {
  const userDisplay =document.querySelector("#user");
  if(user.gender === "female"){
document.body.style.backgroundColor="rebeccapurple";
  } else {
    document.body.style.backgroundColor="blue";
  }
  userDisplay.innerHTML = `
  <div class= "flex justify-between">
  <div class="flex">
  <img 
  class="w-48 h48 rounded-full mr-8"
  src=${user.picture.large}
  />
  <div class="space-y-3"
  <p class="text-xl">
  <span class="font-bold">Name: ${user.name.first} ${user.name.last}</span>
  </p>
  <p class="text-xl">
  <span class="font-bold">Email: ${user.email}</span>
  </p>
  <p class="text-xl">
  <span class="font-bold">Phone: ${user.phone}</span>
  </p>
  <p class="text-xl">
  <span class="font-bold">Location: ${user.location.street.number} ${user.location.street.name}</span>
  </p>
  <p class="text-xl">
  <span class="font-bold">age: ${user.dob.age}</span>
  </p>
  </div>
  </div>
  `
}

function showSpinner(){
  document.querySelector(".spinner").style.display="block";
}

function hideSpinner(){
  document.querySelector(".spinner").style.display="none";
}

document.querySelector("#generate").addEventListener("click", fetchUser)
fetchUser();
