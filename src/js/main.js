//                                                  ---< JAVASCRIPT <---

// EJERCICIO SEMANA 3. MODULO 3:
//   La Veterinaria 'Salt-N-Peta', de la mano de Bootstrap

//     NOMBRE: David Francisco Blandón Mena
//       CLAN GATES. RIWI
//       03.05.2024

//--------------------------------------------------- Creamos un Array de objetos ---------------------------
//------ En lo cuales esta la info de cada mascota ----------------------------------------------------------

let petsDataBase = [
    {
        id: 0,
        name: "zeppelin",
        species: "dog",
        breed: "golden retriever",
        age: calculateAge("2024-01-01"),
        weight: "25 kg",
        status: "stable",
        nameOwner: "jimmy page",
        idOwner: "12345678",
        contact: "3235667890",
        email: "jimpage@example.com",
        pic: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Golden-Retriever.jpg?itok=fuh7L3Yq",
    },
    {
        id: 1,
        name: "hendrix",
        species: "dog",
        breed: "german sheperd",
        age: calculateAge("2023-09-11"),
        weight: "28 kg",
        status: "stable",
        nameOwner: "jimi hendrix",
        idOwner: "89012345",
        contact: "3876543210",
        email: "hendrixexperience@example.com",
        pic: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Golden-Retriever.jpg?itok=fuh7L3Yq",
    },
    {
        id: 2,
        name: "radiohead",
        species: "dog",
        breed: "golden retriever",
        age: calculateAge("2018-07-12"),
        weight: "30 kg",
        status: "critical",
        nameOwner: "thom yorke",
        idOwner: "56789012",
        contact: "3122334455",
        email: "thomyorke@example.com",
        pic: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Golden-Retriever.jpg?itok=fuh7L3Yq",
    },
    {
        id: 3,
        name: "stroke",
        species: "cat",
        breed: "persian",
        age: calculateAge("2019-09-03"),
        weight: "5 kg",
        status: "stable",
        nameOwner: "julian casablancas",
        idOwner: "34567890",
        contact: "3544332211",
        email: "jcasablancas@example.com",
        pic: "https://t4.ftcdn.net/jpg/05/38/96/67/360_F_538966704_ZG7kkjl5JhGxmKyAhHrcD5BbudIIfzQT.jpg",
    },
    {
        id: 4,
        name: "korn",
        species: "cat",
        breed: "siamese",
        age: calculateAge("2023-04-27"),
        weight: "4 kg",
        status: "stable",
        nameOwner: "brian welch",
        idOwner: "87654321",
        contact: "3876543210",
        email: "brianwelch@example.com",
        pic: "https://t4.ftcdn.net/jpg/05/38/96/67/360_F_538966704_ZG7kkjl5JhGxmKyAhHrcD5BbudIIfzQT.jpg",
    },
    {
        id: 5,
        name: "beatle",
        species: "cat",
        breed: "maine coon",
        age: calculateAge("2019-03-02"),
        weight: "7 kg",
        status: "stable",
        nameOwner: "george harrison",
        idOwner: "12345678",
        contact: "3234567890",
        email: "strawberryfields@example.com",
        pic: "https://t4.ftcdn.net/jpg/05/38/96/67/360_F_538966704_ZG7kkjl5JhGxmKyAhHrcD5BbudIIfzQT.jpg",
    },
    {
        id: 6,
        name: "stone",
        species: "dog",
        breed: "chihuahua",
        age: calculateAge("2022-01-29"),
        weight: "3 kg",
        status: "stable",
        nameOwner: "mick jagger",
        idOwner: "23456789",
        contact: "3988776655",
        email: "rollingstone@example.com",
        pic: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Golden-Retriever.jpg?itok=fuh7L3Yq",
    },
    {
        id: 7,
        name: "nirvana",
        species: "dog",
        breed: "french bulldog",
        age: calculateAge("2021-03-25"),
        weight: "12 kg",
        status: "stable",
        nameOwner: "dave grohl",
        idOwner: "45678901",
        contact: "3234567890",
        email: "davegrohl@example.com",
        pic: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Golden-Retriever.jpg?itok=fuh7L3Yq",
    },
    {
        id: 8,
        name: "cream",
        species: "dog",
        breed: "beagle",
        age: calculateAge("2020-01-08"),
        weight: "10 kg",
        status: "stable",
        nameOwner: "eric clapton",
        idOwner: "45678901",
        contact: "3234567890",
        email: "layla@example.com",
        pic: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Golden-Retriever.jpg?itok=fuh7L3Yq",
    },
    {
        id: 9,
        name: "big brother",
        species: "dog",
        breed: "labradoodle",
        age: calculateAge("2019-02-02"),
        weight: "6 kg",
        status: "critical",
        nameOwner: "janis lyn joplin",
        idOwner: "89012345",
        contact: "3876543210",
        email: "janisjoplin@example.com",
        pic: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Golden-Retriever.jpg?itok=fuh7L3Yq",
    },
    {
        id: 10,
        name: "velvet",
        species: "dog",
        breed: "labradoodle",
        age: calculateAge("2021-02-02"),
        weight: "4 kg",
        status: "critical",
        nameOwner: "lou reed",
        idOwner: "89012345",
        contact: "3876543210",
        email: "loureed@example.com",
        pic: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Golden-Retriever.jpg?itok=fuh7L3Yq",
    },
    {
        id: 11,
        name: "pistol",
        species: "dog",
        breed: "labradoodle",
        age: calculateAge("2020-02-02"),
        weight: "3 kg",
        status: "critical",
        nameOwner: "sid vicious",
        idOwner: "89012345",
        contact: "3876543210",
        email: "sexpistols@example.com",
        pic: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Golden-Retriever.jpg?itok=fuh7L3Yq",
    },
];

//-------------------------------------------- Arrays a utilizar --------------------------------------------
let namePets = [];
let nameOwners = [];

//-------------------------------------------- Inserción HTML -----------------------------------------------

// FUNCIÓN: Pintado de la navbar

function paintNav() {
    let navbar = document.querySelector("#navbar");
    navbar.innerHTML = `
    <nav class="navbar navbar-expand-md fixed-top bg-body-secondary">
    <div class="container-fluid gap-3">
    <img src=./public/img/logo-veterinary.webp width="3%" height="auto">
    <a class="navbar-brand text-secondary" href="#"><strong>Salt-N-Peta</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon text-body-secondary"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
                <a class="nav-link active text-secondary" aria-current="page" href="./index.html#cards">Cards</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active text-secondary" aria-current="page" href="./index.html#register">Register</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active text-secondary" aria-current="page" href="./index.html#contact">Contact</a>
            </li>
        </ul>
        <button class="btn btn-outline-secondary" type="button">Wish Me Luck in VET !</button>
    </div>
    </div>
    </nav>`;
}

paintNav()

// FUNCIÓN: Pintado de la pagina

function paintPage() {
    let card = document.querySelector("#cards");
    card.innerHTML = "";
    for (let i = 0; i < petsDataBase.length; i++) {
        card.innerHTML += `
        <div class="border border-dark rounded p-2 w-25 bg-body-secondary">
            <div>
                <img src=${petsDataBase[i].pic} class="card-img-top rounded" alt="perro">
            </div>
            <div class="card-body">
                <h5 class="card-title text-center text-capitalize mt-3">${petsDataBase[i].name}</h5>
                <p class="card-text m-2"> 
                    <span><strong>Specie :</strong> ${petsDataBase[i].species}</span><br>
                    <span><strong>Breed :</strong> ${petsDataBase[i].breed}</span><br>
                    <span><strong>Age :</strong> ${petsDataBase[i].age}</span><br>
                </p>
                <button href="#" onclick="deletePetsBS(${petsDataBase[i].id})" class="btn btn-danger text-capitalize m-1">delete</button>
                <button href="#" onclick="updatePetsBS(${petsDataBase[i].id})" class="btn btn-warning text-capitalize m-1" data-bs-toggle="modal" data-bs-target="#modalForUpdating">update</button>
                <button type="button" onclick="verifyPetsBS(${petsDataBase[i].id})" class="btn btn-primary btn-verify" data-bs-toggle="modal" data-bs-target="#modalForMoreInfo">
                    See more...
                </button>
            </div>
        </div>
        `;
    }
    card.classList.add(
        "d-flex",
        "flex-wrap",
        "justify-content-center",
        "align-items-center",
        "gap-5"
    );
}

paintPage();

// FUNCIÓN: Pintado de modal para ver mas info

function verifyPetsBS(idPet) {
    let moreInfo = document.querySelector(".more-info-modal");
    moreInfo.innerHTML = "";
    for (let i = 0; i < petsDataBase.length; i++) {
        if (i == idPet) {
            moreInfo.innerHTML += `
            <div class="card-body">
                <h5 class="card-title text-center text-capitalize mt-3 border rounded p-2 bg-body-secondary">${petsDataBase[i].name}</h5><br>
                <p class="card-text m-2"> 
                    <h6 class="text-secondary border border-top-0 border-end-0 border-start-0"><i>Pet's data</i></h6>
                    <span><strong>Specie :</strong> ${petsDataBase[i].species}</span><br>
                    <span><strong>Breed :</strong> ${petsDataBase[i].breed}</span><br>
                    <span><strong>Age :</strong> ${petsDataBase[i].age}</span><br>
                    <span><strong>Weight :</strong> ${petsDataBase[i].weight}</span><br>
                    <span><strong>Status :</strong> ${petsDataBase[i].status}</span><br><br>
                    <h6 class="text-secondary border border-top-0 border-end-0 border-start-0"><i>Owner's data</i></h6>
                    <span><strong>Owner's Name :</strong> ${petsDataBase[i].nameOwner}</span><br>
                    <span><strong>Owner's ID :</strong> ${petsDataBase[i].idOwner}</span><br>
                    <span><strong>Owner's Phone :</strong> ${petsDataBase[i].contact}</span><br>
                    <span><strong>Owner's Email :</strong> ${petsDataBase[i].email}</span><br>
                </p>
            </div>
            `;
        }
    }
}

// FUNCIÓN: Pintado del 'switch theme' para claro/oscuro

function paintSwitch() {
    let colorMode = document.querySelector("#colorMode");
    colorMode.innerHTML = `
    <div class="form-check form-switch d-flex justify-content-center gap-3 p-5 m-4">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
    <label class="form-check-label" for="flexSwitchCheckDefault"><i>Switch theme</i></label>
    </div>`;
}

paintSwitch()

let body = document.querySelector("body");

// AddEventListeners

document.addEventListener("click", (e) => {
    // Cambio de tema claro/oscuro
    if (e.target.matches("#flexSwitchCheckDefault")) {
        body.classList.toggle("bg-secondary");
    }
    // Cambio de tema claro/oscuro
    else if (e.target.matches(".submit")) {
        registerPetsBS();
    }
    // El eliminado y actualizado de mascotas fue hecho con 'onclick'
});

//-------------------------------------------- Funciones ----------------------------------------------------

//Funcion para registrar mascotas
function registerPetsBS() {
    if (true) {
        let nameNewPet = document.querySelector("#input-pet-name").value;
        let specieNewPet = document.querySelector("#input-specie").value;
        let breedNewPet = document.querySelector("#input-breed").value;
        let birthNewPet = document.querySelector("#input-birth").value;
        let ageNewPet = calculateAge(birthNewPet);
        let weightNewPet = document.querySelector("#input-weight").value + " kg";
        let statusNewPet = document.querySelector("#input-status").value;
        let nameOwnerNewPet = document.querySelector("#input-owner-name").value;
        let idOwnerNewPet = document.querySelector("#input-owner-id").value;
        let contactNewPet = document.querySelector("#input-contact").value;
        let emailForNewPet = document.querySelector("#input-email").value;
        //ahora agregamos cada valor ingresado a nuestra base de datos
        petsDataBase.push({
            id: petsDataBase.length,
            name: nameNewPet,
            specie: specieNewPet,
            breed: breedNewPet,
            age: ageNewPet,
            weight: weightNewPet,
            status: statusNewPet,
            nameOwner: nameOwnerNewPet,
            idOwner: idOwnerNewPet,
            contact: contactNewPet,
            email: emailForNewPet,
        });
        console.log(petsDataBase);
        paintPage();
    }
}

//Funcion para eliminar mascota
function deletePetsBS(idPet) {
    for (let i = 0; i < petsDataBase.length; i++) {
        if (petsDataBase[i] === petsDataBase[idPet]) {
            console.log(petsDataBase[idPet]);
            let chosen = confirm(
                "Do you really want to delete this pet from system?"
            );
            if (chosen == true) {
                petsDataBase.splice(i, 1);
                paintPage();
            }
        }
    }
}

// Función para Actualizar una mascota
function updatePetsBS(idPet) {
    let modal = document.querySelector("#modalForUpdating");

    let inputName = modal.querySelector("#input-name-updated");
    let inputSpecie = modal.querySelector("#input-specie-updated");
    let inputBreed = modal.querySelector("#input-breed-updated");
    let inputBirth = modal.querySelector("#input-birth-updated");
    let inputAge = calculateAge(inputBirth.value);

    let modalUpdateBtn = modal.querySelector("#btn-update");

    let petUpdate = petsDataBase.find((pet) => pet.id == idPet); // Se comparan Id's
    let updateMyPet = () => {
        // Se cambian los datos actuales por los que se ingresan en el modal con un Object.assign
        Object.assign(petUpdate, {
            name: inputName.value,
            specie: inputSpecie.value,
            breed: inputBreed.value,
            age: inputAge,
        });
        paintPage();
        modalUpdateBtn.removeEventListener("click", updateMyPet); // Se remueve el Listener para que no me quede registro en memoria de los valores anteriores por asi decirlo
    };
    // Se vuelve a agregar el Listener para un caso futuro de modificación
    modalUpdateBtn.addEventListener("click", updateMyPet);
};

//Funcion para calcular edad de mascotas
function calculateAge(birthday) {
    let birthDate = new Date(birthday);
    let yearBirthDate = birthDate.getFullYear();
    let todaysDate = new Date();
    let agePet = todaysDate.getFullYear() - yearBirthDate;
    return agePet;
}

//-------------------------------------------- Antiguo Menu de seleccion ------------------------------------
function main() {
    let flag = true;

    while (flag) {
        let option = parseInt(
            prompt(`¡Welcome to our Veterinary Clinic: Salt-N-Peta!
      1.Register a pet.
      2.Look at list of pets.
      3.Look at list of pet owners.
      4.Search for a pet.
      5.Filter by pet owner.
      6.Update pet info.
      7.Delete a pet from system.
      8.Quit                    
Write down the option you want to be executed: `)
        );

        switch (option) {
            case 1:
                //Funcion para registrar mascotas
                registerPets(petsDataBase);
                break;

            case 2:
                //Funcion para ver lista de mascotas
                findPets();
                break;

            case 3:
                //Funcion para ver lista de dueños
                findOwners();
                break;

            case 4:
                //Funcion para buscar mascota
                let findMyPet = prompt(
                    "Enter the name of the pet you are looking for: "
                )
                    .toLowerCase()
                    .trim();
                filterPets(findMyPet);
                break;

            case 5:
                //Funcion para buscar por dueño
                let ownerToFilterBy = prompt(
                    "Enter the name of the owner you want to filter by our Data: "
                )
                    .toLowerCase()
                    .trim();
                filterByOwner(ownerToFilterBy);
                break;

            case 6:
                //Funcion para actualizar informacion
                let petUpdate = prompt("Enter the name of the pet you want to update: ")
                    .toLowerCase()
                    .trim();
                let idOwnerUpdate = prompt(
                    "Enter the name of the pet you want to update: "
                )
                    .toLowerCase()
                    .trim();
                updatePets(petUpdate, idOwnerUpdate);
                break;

            case 7:
                //Funcion para eliminar mascota
                let petDelete = prompt("Enter the name of the pet you want to delete: ")
                    .toLowerCase()
                    .trim();
                let idOwnerDelete = prompt(
                    "Enter the id of the owner, for the pet you want to delete: "
                )
                    .toLowerCase()
                    .trim();
                deletePets(petDelete, idOwnerDelete);
                break;
            default:
                flag = false;
                break;
        }
    }
}

//-------------------------------------------- Antiguas Funciones sin BS ------------------------------------

//Funcion para registrar mascotas
function registerPets() {
    while (true) {
        alert("REGISTERING A NEW PET: Welcome");
        let nameNewPet = prompt("Enter the name of the pet: ").toLowerCase().trim();
        let specieNewPet = prompt("Enter the specie of the pet: ")
            .toLowerCase()
            .trim();
        let breedNewPet = prompt("Enter the breed of the pet: ").trim();
        let birthNewPet = prompt("Enter the b¿date of birth for the pet: ").trim();
        let ageNewPet = calculateAge(birthNewPet);
        let weightNewPet = prompt("Enter the weight of the pet: ").trim() + " kg";
        let statusNewPet = prompt("Enter the status of the pet: ")
            .toLowerCase()
            .trim();
        let nameOwnerNewPet = prompt("Enter the name of the owner for the pet: ")
            .toLowerCase()
            .trim();
        let idOwnerNewPet = prompt("Enter the id of owner for the pet: ").trim();
        let contactNewPet = prompt("Enter the contact number for the pet: ").trim();
        let emailForNewPet = prompt("Enter the email address for the pet: ")
            .toLowerCase()
            .trim();
        //ahora agregamos cada valor ingresado a nuestra base de datos
        petsDataBase.push({
            name: nameNewPet,
            specie: specieNewPet,
            breed: breedNewPet,
            age: ageNewPet,
            weight: weightNewPet,
            status: statusNewPet,
            nameOwner: nameOwnerNewPet,
            idOwner: idOwnerNewPet,
            contact: contactNewPet,
            email: emailForNewPet,
        });

        alert(nameNewPet + " was registered correctly ¡Congrats!");

        let flag = confirm("Do you want to add more pets?");

        if (!flag) {
            console.log(petsDataBase);
            break;
        }
    }
    return petsDataBase;
}

//Funcion para obtener nombre de mascotas
function findPets() {
    for (let i = 0; i < petsDataBase.length; i++) {
        let name = petsDataBase[i].name;
        namePets.push(name);
    }
    console.table(namePets);
}

//Funcion para obtener nombre de dueños
function findOwners() {
    for (let i = 0; i < petsDataBase.length; i++) {
        let nameOwner = petsDataBase[i].nameOwner;
        nameOwners.push(nameOwner);
    }
    console.log(nameOwners);
}

//Funcion para buscar por dueño
function filterByOwner(ownerToFilterBy) {
    let dueño = [];
    petsDataBase.filter((Element) =>
        Element.nameOwner == ownerToFilterBy ? dueño.push(Element) : ""
    );

    console.log(dueño);
    dueño = [];
}

//Funcion para buscar mascota
function filterPets(pets) {
    for (let i = 0; i < petsDataBase.length; i++) {
        if (pets === petsDataBase[i].name) {
            console.log(petsDataBase[i]);
        }
    }
}

//Funcion para actualizar informacion mascota
function updatePets(petUpdate, idOwnerUpdate) {
    for (let i = 0; i < petsDataBase.length; i++) {
        if (
            petUpdate === petsDataBase[i].name &&
            idOwnerUpdate == petsDataBase[i].idOwner
        ) {
            let whatToUpdate = parseInt(
                prompt(`What do you want to update?
            1.Name
            2.Weight.
            3.Status.
            4.Owner Info.
            5.Contact Number.
            6.Email Address.
            7.Quit`)
            );
            switch (whatToUpdate) {
                case 1:
                    petsDataBase[i].name = prompt("Enter the new name for the pet: ")
                        .toLowerCase()
                        .trim();
                    break;
                case 2:
                    petsDataBase[i].weight =
                        prompt("Enter the new weight for the new pet: ").trim() + " kg";
                    break;
                case 3:
                    petsDataBase[i].status = prompt("Enter the new state for the pet: ")
                        .toLowerCase()
                        .trim();
                    break;
                case 4:
                    petsDataBase[i].nameOwner = prompt(
                        "Enter the name of the new owner for the pet: "
                    )
                        .toLowerCase()
                        .trim();
                    petsDataBase[i].idOwner = prompt(
                        "Enter the id of the new owner for the pet: "
                    ).trim();
                    break;
                case 5:
                    petsDataBase[i].contact = prompt(
                        "Enter the new contact number for the pet: "
                    );
                    break;
                case 6:
                    petsDataBase[i].email = prompt(
                        "Enter the new email address for the pet: "
                    );
                    break;
                default:
                    console.log("The updating process has been finished.");
                    break;
            }

            console.log(petsDataBase[i]);
        } else {
            console.log("Pet not found.");
        }
    }
}

//Funcion para eliminar mascota
function deletePets(petDelete, idOwnerDelete) {
    for (let i = 0; i < petsDataBase.length; i++) {
        if (
            petDelete === petsDataBase[i].name &&
            idOwnerDelete == petsDataBase[i].idOwner
        ) {
            console.log(petsDataBase[i]);
            let chosen = confirm(
                "Do you really want to delete this pet from system?"
            );
            if (chosen == true) {
                delete petsDataBase[i];
            }
        }
    }
}
