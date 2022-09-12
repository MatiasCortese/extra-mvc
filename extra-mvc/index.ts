import * as minimist from 'minimist';
import { parse } from 'path';
import { ProductController, ProductsControllerOptions } from './controllers';

// parseá los argumentos que llegan por terminal con minimist.
function parseArgs(args):ProductsControllerOptions {
  const argumentosParseados = minimist(args);
  return {
    search: argumentosParseados.search
	}
}

function main(){
	// instanciá ProductController para invocar el método processOptions.
	const controller = new ProductController();
	controller.promesa.then(() => {
		const argumentosParseados = parseArgs(process.argv.slice(2));
		const resultado = controller.processOptions(argumentosParseados);
		// mostrá el resultado por la terminal.
  	console.log(resultado);
	})
}

main();