const listFoods = document.querySelector('.listProductFoods');
const listBeidas = document.querySelector('.listProductBebidas');
const listDoces = document.querySelector('.listProductDoces');

function app(){
    if (document.body.clientWidth >= 470 ){
        alert('Você está navegando por um dispositivo não mobile. Para uma melhor experiência acesse em seu smartphone');

    };

    
    
}    

document.addEventListener("DOMContentLoaded", app());


function createCard(title, description, value, urlImg){

    const ContainerProducts = document.createElement('div');
    const ImgProduct = document.createElement('img');
    const ContainerInfoProducts = document.createElement('div');
    const TitleProduct = document.createElement('h2');
    const DescriptionProduct = document.createElement('p');
    const ValueProduct = document.createElement('div');


    ContainerProducts.classList.add('containerProducts');
    ContainerInfoProducts.classList.add('containerInfoProducts');
    TitleProduct.classList.add('titleProduct');
    DescriptionProduct.classList.add('descriptionProduct');
    ValueProduct.classList.add('valueProduct');
    ImgProduct.classList.add('imgProduct');

    ImgProduct.src = urlImg;
    ImgProduct.alt = title;
    TitleProduct.textContent = title;
    DescriptionProduct.textContent = description;
    ValueProduct.textContent = `R$ ${value}`;

    ContainerInfoProducts.appendChild(TitleProduct);
    ContainerInfoProducts.appendChild(DescriptionProduct);
    ContainerInfoProducts.appendChild(ValueProduct);

    ContainerProducts.appendChild(ContainerInfoProducts);
    ContainerProducts.appendChild(ImgProduct);

    return ContainerProducts



}

async function fetchData (){
    
    const response  = await fetch('./app/data.json')
    const data  = await response.json();
    return data
}
let dados = await fetchData();



dados.foods.map((e)=>{

    const title = e.title;
    const description = e.description;
    const value = (e.priceReal + e.priceCent);
    const urlImg = e.urlIMG;

    const newElement = new createCard(title,description,value,urlImg);
    listFoods.appendChild(newElement);
})

dados.bebidas.map((e)=>{

    const title = e.title;
    const description = e.description;
    const value = (e.priceReal + e.priceCent);
    const urlImg = e.urlIMG;

    const newElement = new createCard(title,description,value,urlImg);
    listBeidas.appendChild(newElement);
})
dados.doces.map((e)=>{

    const title = e.title;
    const description = e.description;
    const value = (e.priceReal + e.priceCent);
    const urlImg = e.urlIMG;

    const newElement = new createCard(title,description,value,urlImg);
    listDoces.appendChild(newElement);
})





