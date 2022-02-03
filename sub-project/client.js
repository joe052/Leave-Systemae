//resource at https://javascript.info/formdata
//https://medium.com/swlh/read-html-form-data-using-get-and-post-method-in-node-js-8d2c7880adbf
getInfo();

document.querySelector('form').onsubmit = (e) => {
  e.target.submit();
  e.target.reset();
  return false;
};

async function getInfo(){
  const response = await fetch('/info');
  const data = await response.json();
  console.log(data);

  for(item of data){
    let root = document.createElement('div');
    let id = document.createElement('div');
    let name = document.createElement('div');
    let gender = document.createElement('div');
    let age = document.createElement('div');
    let category = document.createElement('div');
    let tel = document.createElement('div');
    let br = document.createElement("br");

    id.textContent = `${item.id}`;
    name.textContent = `${item.name}`;
    gender.textContent =`${item.gender}`;
    age.textContent =`${item.age}`;
    category.textContent =`${item.category}`;
    tel.textContent =`${item.tel}`;

    root.append(id,name,gender,age,category,tel,br,br);
    document.body.append(root);
  }
}

//let formData = new FormData(form);
/*document.querySelector('form').onsubmit= async (e)=> {
   e.preventDefault();

  const options = {method: 'POST',headers: {'Content-Type': 'multipart/form-data'}, body: new FormData(fData)};

   const response = await fetch('/deliver',options);
  const result = await response.json();
   alert(result.message);
};*/

/*document.querySelector('form').onsubmit*/