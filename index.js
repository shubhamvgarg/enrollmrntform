
class Bio{
    constructor(Name,email,Website,Image_link,gender,skills){
       this.Name=Name;
       this.email=email;
       this.Website=Website;
       this.Image_link=Image_link;
       this.gender=gender;
       this.skills=skills;
    }
}
class UI{
    static displaybio(){

    const storedbio=[
        ];
        const bio=storedbio;
        bio.forEach((b) => UI.addbooktolist(b));
}

    static addbiotolist(b){
    const list=document.querySelector('#card-body');
      const card1= document.createElement('div');
      card1.innerHTML=` 
      <div class="row">
      <div class="col-sm-10">
        <div class="card">
          <div class="card-body">
            <div>
              <h5 class="card-title">${b.Name}</h5>
              <p>${b.gender}</p>
              <p>${b.email}</p>
              <a  href="${b.Website}" target="_blank" >${b.Website}</a>
              <p>${b.skills}</p>
            </div>
            <div>
            <img src=${b.Image_link} alt="sans"  style="float:right; width:200px; height:200px;"/>
          </div>
          </div>
        </div>
      </div>
    </div>`;;
    list.append(card1);
    }

   static clearfields(){
        document.querySelector('#myform').reset();
    }


}

document.addEventListener('DOMContentLoaded', UI.displaybio);

function check(){
  var radios = document.getElementsByName("gen");

  for (var i = 0, len = radios.length; i < len; i++) {
       if (radios[i].checked) {
           return true;
       }
  }

  return false;
}

function validate() {
  if(!(/^[a-zA-Z ]{3,30}$/.test(document.myForm.firstname.value))) {
    alert( "Please provide your name in a correct format!");
     document.myForm.firstname.focus() ;
     return false;
  
  }
 else if(!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test( document.myForm.email.value))) {
     alert( "Please provide your Email in a correct format!" );
     document.myForm.email.focus() ;
     return false;
  }
  else if((document.myForm.website.value=='')){
    alert( "Please provide your website in a correct format!" );
     document.myForm.website.focus() ;
     return false;
  }
  else if((document.myForm.image.value=='')){
    alert( "Please provide your iamge link in a correct format!" );
     document.myForm.image.focus() ;
     return false;
  }
  else if(!check){
    alert("Please provide your gender");
    document.myForm.gen.focus() ;
    return false;
  }
  return true;
}
let i=0;
document.querySelector('#myform').addEventListener('submit', (e) =>
{
    e.preventDefault();
    const gendercheck=check();
    let gender=null;
    if(gendercheck===true){
       gender=document.querySelector('input[name="gen"]:checked').value;
    }
    const name=document.querySelector('#name').value;
    const ema=document.querySelector('#ema').value;
    const website=document.querySelector('#web').value;
    const image=document.querySelector('#img').value;
    const skillboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const skills=[]
    for (var checkbox of skillboxes) {
        skills.push(checkbox.value);
    }
    let s=skills.toString()
    console.log(s);
    i++;
    if(!validate()|| gender==null || s==''){
      swal("PROVIDE REQUIRED INFO");
    }
    else{
    const bio= new Bio(name,ema,website,image,gender,s);
    UI.addbiotolist(bio);
    UI.clearfields();
    }
});