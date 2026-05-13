  const subbtn = document.querySelector('button');
        const form = document.querySelector('form');
        const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];



        function deleteRow(button) {
            // deleteRow function is used to delete the row from the table when the delete button is clicked
            const row = button.parentElement.parentElement.remove();
            
        }

        subbtn.addEventListener("click", (e) => {
            // button click ayinappudu page ni refresh avvakunda stop chesthundhi
            e.preventDefault();
            // form lo user enter chesina data ni get chesi object ga store chestundhi 
            const forminfo = new FormData(form);

            //  object create chesthadi for the user and it is used to store the name of the user
            let user = {
                name: forminfo.get("namevalue")
            }

            //Now creating a new row in the table
            const row = table.insertRow();

            // now row lo names  ni dynamically ga add chestundhi 
            row.innerHTML = `
            <td>${user.name}</td>
            <td><button onclick="deleteRow(this)">Del</button></td>
            `
            // get chesetapudu form lo input lo vunna namevalue ni get chesthadi id ni get cheyyaddu
            // console.log(forminfo.get('namevalue'));
        })