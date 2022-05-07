window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});

const createInnerHtml =() =>{
    const HeaderHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                      "<th>Salary</th><th>StartDate</th><th>Actions</th>";

    const innerHtml = `${HeaderHtml}
    <tr>
    <td><img class="profile" alt="" 
        src="img1.jpg">
     </td>
     <td>Siddhant</td>
     <td>Male</td>
     <td><div class='dept-label'>HR</div>
        <div class='dept-label'>Finance</div>
     </td>
     <td>400000</td>
     <td>01 January 2021</td>
     <td>
     <button id="1" onclick="remove(this)">Remove</button> 
    <button id="1" onclick="update(this)">Edit</button> 
         
    </td> 
</tr>
`;
    document.querySelector('#display').innerHTML=innerHtml;
}