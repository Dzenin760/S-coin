window.addEventListener("load", () => {
    getStudents();
  });
  
  let tbody = document.querySelector(".tbody");
  let namee = document.querySelector(".namee");
  let surname = document.querySelector(".surname");
  let phone = document.querySelector(".phone");
  let date = document.querySelector(".date");
  let add = document.querySelector(".add");
  
  add.addEventListener("click", () => {
    let newStudent = {
      name: namee.value,
      surname: surname.value,
      phone: phone.value,
      date: date.value,
    };
  
    if (newStudent.name && newStudent.phone && newStudent.surname && newStudent.date) {
      fetch("https://660fdbb60640280f219ba3f6.mockapi.io/student", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newStudent),
      })
        .then((res) => res.json())
        .then((data) => {
          getStudents();
          namee.value = "";
          surname.value = "";
          phone.value = "";
          date.value = "";
        });
    }
    else {
      alert('formani toldiring')
    }
  });
  
  console.log(tbody);
  
  function getStudents() {
    tbody.innerHTML = "";
    fetch("https://660fdbb60640280f219ba3f6.mockapi.io/student", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => innerStudent(data))
      .catch((error) => console.log(error));
  }
  function innerStudent(data) {
    data.forEach((element) => {
      tbody.innerHTML += `
            <tr>
            <td> ${element.name}</td>
            <td>${element.surname}</td>
            <td>${element.date}</td>
            <td>${element.phone}</td>
             <td>
            <button class="btn btn-danger" onclick="removeStudent(${element.id})">Delate</button>
            <button class="btn btn-info" onclick="getId(${element.id})">Edit</button>
          </td>
          </tr>
            `;
    });
  }
  function removeStudent(id) {
    fetch(`https://660fdbb60640280f219ba3f6.mockapi.io/student/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => getStudents())
      .catch(error => console.log(error))
  }
  function getId(id) {
    fetch(`https://660fdbb60640280f219ba3f6.mockapi.io/student/${id}`, {
  
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        editData = data;
        name.value = data.name;
        surname.value = data.surname;
        phone.value = data.phone;
        date.value = data.date
      })
      .catch(error => console.log(error))
  }
  
  update.addEventListener("click", () => {
    let newStudent = {
      "name": name.value,
      "surname": surname.value,
      "date": date.value,
      "phone": phone.value,
      "id": editData.id
    }
  
    if (newStudent.name && newStudent.date && newStudent.phone && newStudent.surname) {
  
      fetch(`https://660fdbb60640280f219ba3f6.mockapi.io/student/${editData.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newStudent)
      })
        .then(res => res.app())
        .then(data => {
          editData = null;
          getStudents();
          name.value = ""
          surname.value = ""
          phone.value = ""
          date.value = ""
        })
    }
    else {
      alert("Formani toldiring")
    }
  })
  