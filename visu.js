var cpfV, nameV, emailV, phoneV, addressV, namePetV, raceV, ageV; 

document.getElementById("read").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("cliente/" + cpfV)
      .on("value", function (snap) {
        document.getElementById("cpf").value = snap.val().cpf;
        document.getElementById("name").value = snap.val().name;
        document.getElementById("email").value = snap.val().email;
        document.getElementById("phone").value = snap.val().phone;
        document.getElementById("address").value = snap.val().address;
        document.getElementById("namePet").value = snap.val().namePet;
        document.getElementById("race").value = snap.val().race;
        document.getElementById("age").value = snap.val().age;
      });
  };
  
  document.getElementById("update").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("cliente/" + cpfV)
      .update({
        //   cpf: cpfV,
        name: nameV,
        email: emailV,
        phone: phoneV,
        address: addressV,
        namePet: namePetV,
        race: raceV,
        age: ageV,
      });
    alert("Dados Atualizados");
    document.getElementById("cpf").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("namePet").value = "";
    document.getElementById("race").value = "";
    document.getElementById("age").value = "";
  };
  document.getElementById("delete").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("cliente/" + cpfV)
      .remove();
    alert("Dados Excluidos");
    document.getElementById("cpf").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("namePet").value = "";
    document.getElementById("race").value = "";
    document.getElementById("age").value = "";
  };
  