window.addEventListener('load',()=> {
    const form = document.querySelector("#new_text_form");
    const input = document.querySelector("#new_text_input");
    const list_el= document.querySelector("#task");
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task= input.value ;
        if(!task){
            alert('Please fill out the task');
            return;
        }
        // ALL
        
        const all= document.createElement('div');
        all.classList.add("all");

        const content = document.createElement("div");
        content.classList.add('content')

        const task_input = document.createElement("input");
        task_input.classList.add("task_added");

        task_input.classList.add("text");
        task_input.type="text";
        task_input.value=task;
        task_input.setAttribute("readonly","readonly");

        content.appendChild(task_input);
        
        // Actions

        const task_actions = document.createElement('div');
		task_actions.classList.add('actions');

		// Edit btn
		const task_edit = document.createElement('button');
		task_edit.classList.add('edit');
		task_edit.innerText = 'Edit';

        // Delete btn
		const task_delete = document.createElement('button');
		task_delete.classList.add('delete');
		task_delete.innerText = 'Delete';

		task_actions.appendChild(task_edit);
		task_actions.appendChild(task_delete);

        all.appendChild(content);
		all.appendChild(task_actions);
        
        list_el.appendChild(all);
        

		input.value = '';

        // Edit Function
        
        task_edit.addEventListener('click', (e) =>{
            if (task_edit.innerText.toLowerCase() == "edit"){
                task_edit.innerText="save";
                task_input.removeAttribute("readonly");
                task_input.focus();
            } else {
                task_edit.innerText = "Edit";
                task_input.setAttribute("readonly", "readonly");

            }

        })

        task_delete.addEventListener('click', (e) => {
            list_el.removeChild(all);

        })
    })
})