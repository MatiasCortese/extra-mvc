import * as jsonfile from 'jsonfile';

class Product {
	id?: number = undefined;
  name: string = "";
}

class ProductCollection {
	products: Product[] = [];
	load() {
		const promesa = jsonfile.readFile(__dirname + '/products.json');
		promesa.then((json) => this.products = json);
		return promesa;
	}
	getAll(){
		return this.products;
	}
	getById(id:number){
		return this.products.find(product => product.id == id);
	}
}

export { Product, ProductCollection };