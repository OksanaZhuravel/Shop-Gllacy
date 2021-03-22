const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
class HitList {
  constructor(container = '.hit-list') {
    this.container = container;
    this.hits = []; //массив товаров
    this.allItem = [];//массив объектов
    this._getProducts()
    .then(data => {
      this.hits = [...data];
      this.render()
    });
  }
  __getProducts(){
 return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum(){
        return this.allItem.reduce((accum, item) => accum += item.price, 0);
    }


 /* _fetchHits() {
    this.hits = [
      {mintitle: 'Сливочное с апельсином',
       img: 'img/1.jpg',
       price: 310,
       title: 'Сливочное с апельсиновым джемом и цитрусовой стружкой'},
      {mintitle: 'Сливочно-кофейное',
       img: 'img/2.jpg',
       price: 380,
       title: 'Сливочно-кофейное с кусочками шоколада'},
      {mintitle: 'Сливочно-клубничное',
       img: 'img/3.jpg',
       price: 355,
       title: 'Сливочно-клубничное с присыпкой из белого шоколада'},
    ];
  }*/
  render(){
    const hitItem =
          document.querySelector(this.container);
  for(let product of this.hits){
    const productObj = new HitItem(product);
    this.allItem.push(productObj);
    /*hitItem.innerHTML += productObj.render();*/
    hitItem.insertAdjacentHTML('beforeend', productObj.render());
   }
  }
}
class HitItem {
  constructor(product) {
    this.mintitle = product.mintitle;
    this.img = product.img;
    this.price = product.price;
    this.title = product.title;
  }
  render() {
    return `<li class="hit-list-item ">
                <img class="hit-list-img" src="${this.img}" alt="${this.mintitle}" width="267" height="267">
                <p class="hit-list-prise">
                  <span class="hit-list-prise-number">${this.price}</span>
                  <span class="hit-list-prise-excerpt">/кг</span>
                </p>
                <p class="hit-list-text">
                  <a href="#">${this.title}</a>
                </p>
                <button href="#" class="hit-list-link visually">Быстрый просмотр</button>
              </li>`
  }
}
const list =new HitList();
list.render();
