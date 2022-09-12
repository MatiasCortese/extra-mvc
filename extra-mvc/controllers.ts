import { ProductCollection, Product } from './models';

export class ProductsControllerOptions {
  search: number; 
}

class ProductController {
	products: ProductCollection;
	promesa: Promise<any>;
  constructor() {
    this.products = new ProductCollection();
		const promesa = this.products.load();
		this.promesa = promesa;
	}
	processOptions(option) {
		let resultado;
		if (option.search) {
			resultado = this.products.getById(option.search);
		} else {
			resultado = this.products.getAll();
		}
		return resultado;
	}
}

export { ProductController };