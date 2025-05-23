// Datos del menú: categorías, platos, precios y espacio para imagen
const menuData = [
  {
    categoria: 'Desayunos',
    platos: [
      { nombre: 'Calentado del Lago', precio: 25000, imagen: './image/calentado-imagen-muestra.jpeg', detalles: 'Calentado de frijoles con arroz, carne de res, cerdo o chicharrón, arepa, huevo en cacerola, chocolate o café con leche.' },
      { nombre: 'Calentado', precio: 20000, imagen: './image/calentadoConChicharron.jpg', detalles: 'Calentado de frijoles con arroz, huevo en cacerola, arepa, queso, café con leche o chocolate.' },
      { nombre: 'Cereal', precio: 19000, imagen: '', detalles: 'Cereal con frutas (trozos de banano y fresa), acompañado de kumis, yogurt o leche.' },
      { nombre: 'Desayuno del Lago', precio: 19000, imagen: '', detalles: 'Huevos al gusto o cacerola, arepa con quesito, pan, mantequilla, chocolate o café con leche.' },
      { nombre: 'Huevos con Jamón', precio: 20000, imagen: '', detalles: 'Huevos con jamón, arepa con quesito, pan, mantequilla, chocolate o café con leche.' },
      { nombre: 'Huevos Rancheros', precio: 20000, imagen: '', detalles: 'Huevos con salchicha ranchera, arepa con quesito, pan, mantequilla, chocolate o café con leche.' },
      { nombre: 'Omelette', precio: 22000, imagen: '', detalles: 'Tortilla de huevos rellena con queso mozzarella, tomate y tocineta, acompañado de arepa, trozos de fruta y chocolate o café con leche.' },
    ]
  },
  {
    categoria: 'Sándwiches y Derretidos',
    platos: [
      { nombre: 'Derretido Habano', precio: 33000, imagen: '', detalles: 'Sándwich de jamón y queso derretido con mantequilla de maní.' },
      { nombre: 'Derretido Cubano', precio: 33000, imagen: '', detalles: 'Sándwich de jamón y queso derretido con mantequilla de maní.' },
      { nombre: 'Derretido BBQ', precio: 33000, imagen: '', detalles: 'Sándwich de jamón y queso derretido con mantequilla de maní.' },
      { nombre: 'Derretido Pasión', precio: 33000, imagen: '', detalles: 'Sándwich de jamón y queso derretido con mantequilla de maní.' },
      { nombre: 'Sándwich de Jamón y Queso', precio: 29000, imagen: '', detalles: 'Sándwich de jamón y queso derretido con mantequilla de maní.' },
      { nombre: 'Sándwich de Atún', precio: 29000, imagen: '', detalles: 'Sándwich de atún derretido con mantequilla de maní.' },
      { nombre: 'Sándwich gratinado de pollo y champiñones', precio: 32000, imagen: '', detalles: 'Sándwich gratinado de pollo y champiñones derretidos con mantequilla de maní.' },
    ]
  },
  {
    categoria: 'Platos Fuertes',
    platos: [
      { nombre: 'Baby Beef', precio: 48000, imagen: '', detalles: 'Carne de res desmechada a la parrilla con salsa BBQ.' },
      { nombre: 'Bistec de Anca', precio: 46000, imagen: '', detalles: 'Bistec de res desmechado a la parrilla con salsa BBQ.' },
      { nombre: 'Pechuga de Pollo', precio: 42000, imagen: '', detalles: 'Pechuga de pollo desmechado a la parrilla.' },
      { nombre: 'Cañon de Cerdo', precio: 42000, imagen: '', detalles: 'Cañon de cerdo desmechado a la parrilla.' },
      { nombre: 'Pechuga del Lago', precio: 45000, imagen: '', detalles: 'Pechuga de pollo desmechado a la parrilla.' },
      { nombre: 'Cazuela Montañera', precio: 40000, imagen: '', detalles: 'Cazuela con carne, papas y verduras.' },
      { nombre: 'Pollo a la Teriyaki', precio: 45000, imagen: '', detalles: 'Pollo a la parrilla con salsa teriyaki.' },
      { nombre: 'Filet Mignon', precio: 52000, imagen: '', detalles: 'Filet mignon desmechado a la parrilla.' },
      { nombre: 'Arroz con Camarones', precio: 49000, imagen: '', detalles: 'Arroz con camarones.' },
      { nombre: 'Camarón Teriyaki', precio: 49000, imagen: '', detalles: 'Camarón a la parrilla con salsa teriyaki.' },
      { nombre: 'Pechuga de Pollo', precio: 40000, imagen: '', detalles: 'Pechuga de pollo desmechado a la parrilla.' },
      { nombre: 'Pechuga Hawaiana', precio: 46000, imagen: '', detalles: 'Pechuga de pollo desmechado a la parrilla con salsa hawaiiana.' },
    ]
  },
  {
    categoria: 'Salmones',
    platos: [
      { nombre: 'Salmón a la Plancha', precio: 60000, imagen: '', detalles: 'Salmón a la parrilla.' },
      { nombre: 'Salmón a la Marinera', precio: 69000, imagen: '', detalles: 'Salmón a la parrilla con salsa marinera.' },
      { nombre: 'Salmón Pasión', precio: 62000, imagen: '', detalles: 'Salmón a la parrilla con salsa de camarón.' },
      { nombre: 'Salmón del Lago', precio: 62000, imagen: '', detalles: 'Salmón a la parrilla.' },
    ]
  },
  {
    categoria: 'Menú del Lago',
    platos: [
      { nombre: 'Menú del Lago', precio: 27000, imagen: '', detalles: 'Nuestro plato exclusivo.' },
    ]
  },
  {
    categoria: 'Ensaladas Verdes',
    platos: [
      { nombre: 'Ensalada de Pollo', precio: 35000, imagen: '', detalles: 'Ensalada de pollo con lechuga, tomate, cebolla y aderezo.' },
      { nombre: 'Ensalada de Salmón', precio: 48000, imagen: '', detalles: 'Ensalada de salmón con lechuga, tomate, cebolla y aderezo.' },
    ]
  },
  {
    categoria: 'Comidas Rápidas',
    platos: [
      { nombre: 'Hamburguesa del Lago', precio: 27000, imagen: '', detalles: 'Hamburguesa con carne, queso, lechuga, tomate y aderezo.' },
      { nombre: 'Hamburguesa Mignon', precio: 32000, imagen: '', detalles: 'Hamburguesa con carne, queso, lechuga, tomate y aderezo.' },
      { nombre: 'Perro Caliente', precio: 22000, imagen: '', detalles: 'Perro caliente con carne, queso, lechuga, tomate y aderezo.' },
      { nombre: 'Salchipapas', precio: 22000, imagen: '', detalles: 'Salchipapas con carne, queso y aderezo.' },
      { nombre: 'Nuggets de Pollo', precio: 21000, imagen: '', detalles: 'Nuggets de pollo frito.' },
    ]
  },
  {
    categoria: 'Arepas y Pinchos',
    platos: [
      { nombre: 'Arepa Mignon', precio: 33000, imagen: '', detalles: 'Arepa con queso derretido.' },
      { nombre: 'Pincho de Pollo', precio: 34000, imagen: '', detalles: 'Pincho de pollo frito.' },
      { nombre: 'Pincho de Res', precio: 34000, imagen: '', detalles: 'Pincho de res frito.' },
    ]
  },
  {
    categoria: 'Maicitos',
    platos: [
      { nombre: 'Maicitos de Pollo', precio: 27000, imagen: '', detalles: 'Maicitos de pollo frito.' },
      { nombre: 'Maicitos de Res', precio: 29000, imagen: '', detalles: 'Maicitos de res frito.' },
      { nombre: 'Maicitos Ranchero', precio: 27000, imagen: '', detalles: 'Maicitos de res frito.' },
      { nombre: 'Maicitos Mixtos', precio: 32000, imagen: '', detalles: 'Maicitos mixtos fritos.' },
    ]
  },
  {
    categoria: 'Delicias Mixtas',
    platos: [
      { nombre: 'Palitos de Queso con Dulce de Piña (3u)', precio: 17000, imagen: '', detalles: 'Palitos de queso con dulce de piña.' },
      { nombre: 'Palitos de Queso con Dulce de Piña (6u)', precio: 27000, imagen: '', detalles: 'Palitos de queso con dulce de piña.' },
      { nombre: 'Palitos de Queso con Dulce de Piña (12u)', precio: 42000, imagen: '', detalles: 'Palitos de queso con dulce de piña.' },
    ]
  },
  {
    categoria: 'Waffles',
    platos: [
      { nombre: 'Waffle de Arequipe', precio: 28000, imagen: '', detalles: 'Waffle de arequipe.' },
      { nombre: 'Waffle Tropical', precio: 32000, imagen: '', detalles: 'Waffle tropical.' },
    ]
  },
  {
    categoria: 'Ensaladas y Salpicones',
    platos: [
      { nombre: 'Ensalada del Lago Grande', precio: 32000, imagen: '', detalles: 'Ensalada grande con lechuga, tomate, cebolla y aderezo.' },
      { nombre: 'Ensalada del Lago Mediana', precio: 28000, imagen: '', detalles: 'Ensalada mediana con lechuga, tomate, cebolla y aderezo.' },
      { nombre: 'Ensalada Mediana Sencilla', precio: 20000, imagen: '', detalles: 'Ensalada mediana sencilla con lechuga, tomate, cebolla y aderezo.' },
      { nombre: 'Salpicón Especial', precio: 18000, imagen: '', detalles: 'Salpicón especial con lechuga, tomate, cebolla y aderezo.' },
      { nombre: 'Salpicón Sencillo', precio: 15000, imagen: '', detalles: 'Salpicón sencillo con lechuga, tomate, cebolla y aderezo.' },
    ]
  },
  {
    categoria: 'Copas Especiales',
    platos: [
      { nombre: 'Fresas del Bosque', precio: 25000, imagen: '', detalles: 'Copa de fresas.' },
      { nombre: 'Melocotones del Bosque', precio: 25000, imagen: '', detalles: 'Copa de melocotones.' },
      { nombre: 'Copa Mixta', precio: 28000, imagen: '', detalles: 'Copa mixta con fresas, melocotones y crema.' },
      { nombre: 'Banana Split', precio: 24000, imagen: '', detalles: 'Banana split con helado.' },
      { nombre: 'Brownie', precio: 22000, imagen: '', detalles: 'Brownie con helado.' },
    ]
  },
  {
    categoria: 'Bebidas',
    platos: [
      { nombre: 'Jugo natural en agua', precio: 11000, imagen: '', detalles: 'Jugo natural de frutas en agua.' },
      { nombre: 'Jugo natural en leche', precio: 13000, imagen: '', detalles: 'Jugo natural de frutas en leche.' },
      { nombre: 'Jugo de níspero o zapote', precio: 14000, imagen: '', detalles: 'Jugo de níspero o zapote.' },
      { nombre: 'Milo frío o caliente', precio: 14000, imagen: '', detalles: 'Milo frío o caliente.' },
      { nombre: 'Jugo de naranja', precio: 14000, imagen: '', detalles: 'Jugo de naranja.' },
      { nombre: 'Limonada natural', precio: 12000, imagen: '', detalles: 'Limonada natural.' },
      { nombre: 'Limonada de coco', precio: 16000, imagen: '', detalles: 'Limonada de coco.' },
      { nombre: 'Limonada cerezada', precio: 14000, imagen: '', detalles: 'Limonada cerezada.' },
      { nombre: 'Sodas saborizadas', precio: 13000, imagen: '', detalles: 'Sodas saborizadas.' },
    ]
  },
  {
    categoria: 'Bebidas Calientes',
    platos: [
      { nombre: 'Capuccino', precio: 8000, imagen: '', detalles: 'Capuccino.' },
      { nombre: 'Mocaccino', precio: 8000, imagen: '', detalles: 'Mocaccino.' },
      { nombre: 'Aromática de fruta', precio: 5000, imagen: '', detalles: 'Aromática de fruta.' },
      { nombre: 'Café aroma suave o fuerte', precio: 4000, imagen: '', detalles: 'Café aroma suave o fuerte.' },
    ]
  },
  {
    categoria: 'Delicias Infantiles',
    platos: [
      { nombre: 'Gusanito del Lago', precio: 22000, imagen: '', detalles: 'Gusanito del Lago.' },
      { nombre: 'Copa Piñita', precio: 16000, imagen: '', detalles: 'Copa Piñita.' },
      { nombre: 'Arañita del Lago', precio: 13000, imagen: '', detalles: 'Arañita del Lago.' },
      { nombre: 'Señor Waffle', precio: 18000, imagen: '', detalles: 'Señor Waffle.' },
    ]
  },
];

const categoriasSection = document.getElementById('categorias');
const platosSection = document.getElementById('platos');
let volverBtn = null;

displayCategorias();

function displayCategorias() {
  categoriasSection.innerHTML = '';
  categoriasSection.style.display = '';
  platosSection.innerHTML = '';
  platosSection.classList.add('d-none');
  platosSection.classList.remove('fullscreen');
  if (volverBtn) volverBtn.remove();
  menuData.forEach((cat, idx) => {
    const col = document.createElement('div');
    col.className = 'categoria-col';
    const btn = document.createElement('button');
    btn.className = 'categoria-btn w-100 py-3 mb-2';
    btn.textContent = cat.categoria;
    btn.onclick = () => mostrarPlatos(idx);
    col.appendChild(btn);
    categoriasSection.appendChild(col);
  });
}

function mostrarPlatos(idx) {
  categoriasSection.style.display = 'none';
  const platos = menuData[idx].platos;
  platosSection.innerHTML = '';
  platosSection.classList.remove('d-none');
  platosSection.classList.add('fullscreen');

  // Encabezado con logo pequeño, nombre de categoría y botón volver
  const headerDiv = document.createElement('div');
  headerDiv.className = 'categoria-header text-center mb-4';
  headerDiv.style.position = 'relative';
  headerDiv.style.display = 'flex';
  headerDiv.style.flexDirection = 'column';
  headerDiv.style.alignItems = 'center';
  headerDiv.style.justifyContent = 'center';
  headerDiv.style.marginBottom = '2rem';

  // Logo pequeño
  const logo = document.createElement('img');
  logo.src = './imagenes/logoUltimate.png';
  logo.alt = 'Logo Frutas del Lago';
  logo.className = 'logo-categoria';
  headerDiv.appendChild(logo);

  // Nombre de la categoría
  const titulo = document.createElement('h2');
  titulo.className = 'categoria mb-2';
  titulo.innerText = menuData[idx].categoria;
  titulo.style.fontSize = '1.5rem';
  titulo.style.marginBottom = '10px';
  headerDiv.appendChild(titulo);

  // Botón volver
  volverBtn = document.createElement('button');
  volverBtn.id = 'volver-categorias';
  volverBtn.innerText = '← Volver';
  volverBtn.onclick = () => displayCategorias();
  volverBtn.style.marginBottom = '10px';
  headerDiv.appendChild(volverBtn);

  platosSection.appendChild(headerDiv);

  // Platos
  const row = document.createElement('div');
  row.className = 'row g-3 justify-content-center';
  platos.forEach((plato, i) => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-4 mb-3';
    col.innerHTML = `
      <div class="plato-card">
        <img class="plato-img" src="${plato.imagen || './imagenes/placeholder.png'}" alt="${plato.nombre}">
        <div class="plato-nombre">${plato.nombre}</div>
        <div class="plato-precio">$${plato.precio.toLocaleString('es-CO')}</div>
        <button class="btn btn-outline-success mt-2" type="button" data-idx="${i}">Ver detalles</button>
        <div class="plato-detalles" style="display:none;transition:max-height 0.3s;overflow:hidden;margin-top:10px;color:#333;background:#F4F4F4;border-radius:8px;padding:10px 12px;"></div>
        <a href="#" target="_blank" class="btn btn-success mt-2 w-100 d-flex align-items-center justify-content-center" style="gap:8px;">
          <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='currentColor' viewBox='0 0 24 24' style='margin-right:4px;'><path d='M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.175.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.994c-.003 5.456-4.438 9.891-9.898 9.891m8.413-18.306A11.815 11.815 0 0 0 12.05 0C5.495 0 .057 5.438.053 12.092c0 2.13.557 4.213 1.615 6.044L.057 24l6.064-1.616a11.888 11.888 0 0 0 5.929 1.515h.005c6.554 0 11.993-5.438 11.997-12.092a11.86 11.86 0 0 0-3.497-8.425'/></svg>
          Pedir domicilio por WhatsApp
        </a>
      </div>
    `;
    row.appendChild(col);
  });
  platosSection.appendChild(row);
  platosSection.scrollIntoView({ behavior: 'smooth' });

  // Lógica de acordeón para detalles
  row.querySelectorAll('.btn-outline-success').forEach((btn, i) => {
    btn.onclick = function() {
      const detallesDiv = btn.parentElement.querySelector('.plato-detalles');
      if (detallesDiv.style.display === 'none' || detallesDiv.style.display === '') {
        detallesDiv.innerText = platos[i].detalles || 'Sin descripción.';
        detallesDiv.style.display = 'block';
      } else {
        detallesDiv.style.display = 'none';
      }
    };
  });
}

// Modal para detalles
if (!document.getElementById('modal-detalles')) {
  const modal = document.createElement('div');
  modal.id = 'modal-detalles';
  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.background = 'rgba(0,0,0,0.5)';
  modal.style.zIndex = '3000';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.innerHTML = `
    <div id="modal-content" style="background:#fff;max-width:400px;width:90%;margin:auto;padding:2rem 1.2rem;border-radius:18px;position:relative;text-align:center;">
      <button id="cerrar-modal" style="position:absolute;top:10px;right:16px;font-size:1.5rem;background:none;border:none;color:#C0392B;font-weight:bold;">&times;</button>
      <h3 id="modal-titulo" style="color:#C0392B;"></h3>
      <p id="modal-descripcion" style="color:#222;font-size:1.1rem;"></p>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('cerrar-modal').onclick = () => {
    modal.style.display = 'none';
  };
}

window.mostrarDetalles = function(idx, i) {
  const plato = menuData[idx].platos[i];
  document.getElementById('modal-titulo').innerText = plato.nombre;
  document.getElementById('modal-descripcion').innerText = plato.detalles || 'Sin descripción.';
  document.getElementById('modal-detalles').style.display = 'flex';
}; 