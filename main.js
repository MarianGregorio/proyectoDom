class Servicio{
    constructor(id, nombre, descripcion, precio){
        this.id = Number(id),
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.precio = Number(precio)
    }
}

const arrayServicios = [];

arrayServicios.push(new Servicio(1, "Customer experience", "Fidelización del cliente a través de experiencias hechas a medida." , 200 ));
arrayServicios.push(new Servicio(2, "Business Model", "Descubrimiento de oportunidades y diseño de una estrategia integral de negocio." , 300 ));
arrayServicios.push(new Servicio(3, "Digital Transforme", "Construccion de negocios digitales, agiles, dinamicos y rentables.", 400));
arrayServicios.push(new Servicio(4, "Digital Strategy", "Potencie exponencialmente su negocio y obtenga resultados concretos.", 400));



function titulo(){
    let h1 = document.createElement("h1");
    h1.innerText = "Llevamos tu negocio al siguiente nivel"
    document.body.append(h1);
}

const ordenarMenorMayor = () => {
    arrayServicios.sort((a,b) => a.precio - b.precio);
    creadorServicio();
}

function creadorServicio(){
    for(const servicio of arrayServicios){
        let div = document.createElement("div");
        div.innerHTML = `<h2>${servicio.nombre}</h2>
                         <p>${servicio.descripcion}</p>
                         <button id='${servicio.id}'>Contratar</button>`;
        
        document.body.append(div);
    }
}

function obtenerClass(){
    let h2 = document.getElementsByTagName("h2");
    let p = document.getElementsByTagName("p");
    let botones = document.getElementsByTagName("button");
    for (const nombre of h2 ){
        nombre.className = "service-title"
    }
    for (const parrafo of p ){
        parrafo.className = "descripcion"
    }
    for (const boton of botones ){
        boton.className = "btn"
    }
}


titulo();
ordenarMenorMayor();
obtenerClass();
