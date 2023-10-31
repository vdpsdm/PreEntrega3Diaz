//Constructor de la lista de perros.
class doglistBuilder {
    constructor(id,name,image,breed,age,color,size,gender,personality){
        this.id=id;
        this.name=name;
        this.image=image;
        this.breed=breed;
        this.age=age;
        this.color=color;
        this.size=size;
        this.gender=gender;
        this.personality=personality;
    }
};
//Declaracion lista de perros
const dogList=[];
dogList.push(new doglistBuilder("1","Jay","image","huskysiberiano","2","white","big","male","sociable"));
dogList.push(new doglistBuilder("2","Nunu","image","goldenretriever","1","beige","male","medium","sociable"));
dogList.push(new doglistBuilder("3","Ginger","image","caniche","0","beige","small","female","playful"));
dogList.push(new doglistBuilder("4","Marley","image","germansheperd","0","brown","small","male","fearless"));
dogList.push(new doglistBuilder("5","Bella","image","yorkshireterrier","1","white","small","female","timid"));
dogList.push(new doglistBuilder("6","Luna","image","dalmatian","1","white","medium","female","sociable"));
dogList.push(new doglistBuilder("7","Charlie","image","boxer","3","brown","big","male","playful"));
dogList.push(new doglistBuilder("8","Cooper","image","chihuahua","1","black","small","male","fearless"));
dogList.push(new doglistBuilder("9","Milo","image","englishBulldog","1","white","medium","male","timid"));
dogList.push(new doglistBuilder("10","Max","image","beagle","0","brown","small","male","curious"));

//Funcion para filtros generales
function filtering(filter){
    let found=null;
    dogList.forEach(item=>{
      for(let i=0;i<Object.keys(item).length;i++){
        if(Object.values(item)[i]===filter){
          found=i;
        }
      }
    })
    let dogListFiltered=dogList.filter(item=> Object.values(item)[found] === filter)
    dogListFiltered.forEach(item => {
        alert(`id: ${item.id}
        name: ${item.name}
        image: ${item.image}
        breed: ${item.breed}
        age: ${item.age}
        color: ${item.color}
        size: ${item.size}
        gender: ${item.gender}
        personality: ${item.personality}`);
  });
  return dogListFiltered
  }

//Funcion para la generacion de la solicitud del usuario a la pagina cuya entrada es el arreglo de objetos actual de la lista de perros.
function dogRequest(doglistFiltered,dogselectedId){
    let dogSelectedFind= doglistFiltered.find((item) => item.id === dogselectedId);
    if (dogSelectedFind){
    let dogSelected= doglistFiltered.filter((item) => item.id === dogselectedId);
    alert("Showing all the details of the chosen dog");
    dogSelected.forEach(item => {
        alert(`id: ${item.id}
        name: ${item.name}
        image: ${item.image}
        breed: ${item.breed}
        age: ${item.age}
        color: ${item.color}
        size: ${item.size}
        gender: ${item.gender}
        personality: ${item.personality}`);
    });

    let userdogChoice = prompt("Please write adopt, sponsor or back to return to the last filter, depending on what you want").toLowerCase();
    switch(userdogChoice){
        case "adopt":
            alert("Here I show a notification of the dog selected to the user saying that the refugee will be notified and an email will arrive to him/her, so the request can be processed and an appointment set for him/her to come to the refugee. Then save the user information, the request, send it to database and then request an email for the user and the agent.");
            break
        case "sponsor":
            alert("Here I show a notification of the dog selected to the user saying that the refugee will be notified and an email will arrive to him/her, so the request can be processed and an appointment set for him/her to come to the refugee. Then save the user information, the request, send it to database and then request an email for the user and the agent.");
            break
        case "back":
            break
        default:
            alert("Wrong answer. Please try again");
            break
    }

}else{
    alert("That id does not exist within that filter");
}
};

  //Ingreso de filtro
  let ban2=0;
  while(ban2===0){
    let answer1=prompt("Please write the filter selected").toLowerCase();
    let dogListFiltered= filtering(answer1);
    let dogselectedId= prompt("Please write the id of the dog you want from the list");
    dogRequest(dogListFiltered,dogselectedId);
    }
  
