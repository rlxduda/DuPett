var cpfV, nameV, emailV, phoneV, addressV, namePetV, raceV, ageV; //variaveis que irão receber os dados cadastrados

function readFom() {
  cpfV = document.getElementById("cpf").value; 
  nameV = document.getElementById("name").value;
  emailV = document.getElementById("email").value;
  phoneV = document.getElementById("phone").value;
  addressV = document.getElementById("address").value;
  namePetV = document.getElementById("namePet").value;
  raceV = document.getElementById("race").value;
  ageV = document.getElementById("age").value;
  console.log(cpfV, nameV, emailV, phoneV, addressV, namePetV, raceV, ageV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("cliente/" + cpfV)
    .set({
      cpf: cpfV,
      name: nameV,
      email: emailV,
      phone: phoneV,
      address: addressV,
      namePet: namePetV,
      race: raceV,
      age: ageV,
    });
  alert("Dados Inseridos");
  document.getElementById("cpf").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("namePet").value = "";
  document.getElementById("race").value = "";
  document.getElementById("age").value = "";
};

