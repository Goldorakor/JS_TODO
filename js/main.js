
// Sélectionne le bouton d'ajout en utilisant son ID
const addBtn = document.querySelector('#btn');
// Sélectionne le modèle de carte de tâche (todoCard) à cloner
const taskCard = document.querySelector(".todoCard");
// Sélectionne le conteneur où les cartes de tâches seront ajoutées
const taskContainer = document.querySelector("#todoCards");

// Sélectionne le bouton de suppression en utilisant son ID (l'icone poubelle)
const delBtn = document.querySelector('.delBtn');


// on ajoute un écouteur d'évènement sur le bouton pour appeler une fonction ajout

// Ajoute une tâche lorsque le bouton est cliqué (add a task on click)
addBtn.addEventListener('click', addTask);

// on ajoute un écouteur d'évènement sur l'icone poubelle pour appeler une fonction suppression
delBtn.addEventListener('click', function() {
    deleteTask(taskCard);
});



// Fonction pour ajouter une nouvelle tâche
function addTask() {
    // Clone la carte de tâche existante pour créer une nouvelle tâche
    const newTask = taskCard.cloneNode(true)
    // ligne ajoutée pour la partie suppression
    const newDelBtn = newTask.querySelector('.delBtn')
    // Sélectionne la zone de texte dans la nouvelle carte de tâche
    const newTextArea = newTask.querySelector('.task')
    // Définit le texte de la nouvelle tâche à "New Task"
    newTextArea.value = "New Task"
    // lignes suivantes ajoutées pour la partie suppression : la nouvelle tâche contient son propre bouton de suppression
    newDelBtn.addEventListener('click', function() {
        deleteTask(newTask);
    });

    // Ajoute la nouvelle tâche au conteneur des tâches
    taskContainer.appendChild(newTask) // append new task to the tasks container
    
}

// fonction pour supprimer une tâche
function deleteTask (task) {
    task.remove (); // remove the task
}

