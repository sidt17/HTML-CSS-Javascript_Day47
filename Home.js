window.addEventListener('DOMContentLoaded',(event)=>{
    createInnerHtml();
});

const createInnerHtml =() =>{
    const HeaderHtml ="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                      "<th>Salary</th><th>StartDate</th><th>Actions</th>";

    let innerHtml=`${HeaderHtml}`;
     let empPayrollList= createEmployeePayRollJSON();
     for(const empPayRollData of empPayrollList)
     {

     

        innerHtml = `${innerHtml}
    <tr> 

    <td><img class="profile" alt="" 
        src=${empPayRollData._profilePic}>
     </td>
     <td>${empPayRollData._name}</td>
     <td>${empPayRollData._gender}</td>
      <td>${getDeptHtml(empPayRollData._department)}
      </td>
     <td>${empPayRollData._salary}</td>
     <td>${empPayRollData._startDate}</td>
     <td>
     <button id="1" onclick="remove(this)">Remove</button> 
    <button id="1" onclick="update(this)">Edit</button> 
         
    </td> 
</tr>
`;
}
    document.querySelector('#display').innerHTML=innerHtml;
}
const getDeptHtml = (deptList) => {
    let deptHtml ='';
    for(const dept of deptList){
        deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}
    const createEmployeePayRollJSON=()=>{
        let employeePayRollListLocal=[
            {
                _name:'Siddhant',
                _gender:'Male',
                _department:['Engineering','Finance'],
                _salary:'50000',
                _startDate:'29 Oct 2019',
                _note:'',
                _id:new Date().getTime(),
                _profilePic:'img1.jpg'
            },
            {
                _name:'Priya',
                _gender:'Female',
                _department:['Engineering','Finance'],
                _salary:'40000',
                _startDate:'1 Oct 2020',
                _note:'',
                _id:new Date().getTime(),
                _profilePic:'img3.jpg'
            }
    
        ];
        return employeePayRollListLocal;
    }