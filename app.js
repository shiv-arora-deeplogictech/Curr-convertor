const BASE_URL = "";

const dropdown=document.querySelector('.dropdown select');

for(let select of dropdown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerHTML=currCode;
        newOption.value= currCode;
        select.append(currCode);
    }
}