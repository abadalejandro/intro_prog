// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompras = ["huevos", "arroz", "leche", "pan", "fruta", "verduras"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.push("Aceite de Girasol");

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop();
console.log(listaCompras);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let listaPeliculas = [{titulo:"El Arlequin", director: "Juan Pelyo", fecha:new Date("1999-03-01")},{titulo:"Mi pequeño angelito", director: "Pedro del Sol", fecha:new Date("2000-04-02")},{titulo:"Terminator", director: "Cameron Diaz", fecha:new Date("2011-12-01")}];
console.log(listaPeliculas);

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let peliculasPosterioresEnero2010 = listaPeliculas.filter((film)=>film.fecha > new Date("2010-01-01"));
console.log(peliculasPosterioresEnero2010);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = listaPeliculas.map(film => film.director);
console.log(directores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulos = listaPeliculas.map(film => film.titulo);
console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let directoresTitulos = directores.concat(titulos);
console.log(directoresTitulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let directoresTitulosFP = [...directores, ...titulos];
console.log(directoresTitulosFP);

