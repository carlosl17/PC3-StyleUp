# STYLEUP | Portafolio Interactivo - PC3 UTP

**Curso:** Hojas de Estilo en Cascada Avanzado  
**Evaluación:** Práctica Calificada 3 (Semana 12)  
**Proyecto:** StyleUp, tienda de ropa ficticia con categorías Hombre, Mujer, Niños y Accesorios.

## Descripción

Landing page académica de la tienda StyleUp. Conserva la identidad conceptual del e-commerce desarrollado en Angular, pero esta entrega es una **versión independiente HTML5 + CSS3 + Bootstrap 5**, enfocada específicamente en transformaciones y animaciones CSS. **No modifica ni sustituye el repositorio Angular**, no realiza compras, no usa JSON Server ni almacena formularios.

## Estructura

```text
PC3_StyleUp/
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
├── img/
│   ├── coleccion.svg
│   ├── hombre.svg
│   ├── mujer.svg
│   └── ninos.svg
├── README.md
```

## Uso

1. Abrir la carpeta en Visual Studio Code.
2. Abrir `index.html` con Live Server (extensión opcional) o directamente con Chrome.
3. Se requiere conexión para descargar **Bootstrap 5.3.3 desde el CDN**. Las ilustraciones son archivos SVG locales.
4. Probar el menú hamburguesa en el inspector móvil de Chrome (F12 → Device toolbar).

## Requisitos de la práctica

| Criterio                                  | Dónde comprobar                                                                 |
| ----------------------------------------- | ------------------------------------------------------------------------------- |
| Bootstrap 5, `container`, `row`, `col-*`  | `index.html`, todas las secciones                                               |
| Navbar responsive + hamburguesa           | `index.html` id `menuStyleUp`, `js/app.js`                                      |
| Formulario nombre/email/mensaje y botones | `index.html` sección `#contacto`                                                |
| Rotación 2D                               | `css/estilos.css`: `.effect-rotate:hover {transform:rotate(3deg)}`              |
| Escalado 2D                               | `.effect-scale:hover {transform:scale(1.05)}`                                   |
| Traslación 2D                             | `.effect-translate:hover {transform:translateY(-12px)}`                         |
| Transiciones suaves                       | `.fashion-card { transition: ... }`                                             |
| Transformación 3D                         | `.perspective-scene`, `.three-d-card`, `.perspective-scene:hover .three-d-card` |
| Animación propia                          | `@keyframes slideUpReveal`, aplicada a `.animate-rise`                          |
| Loader infinito                           | `.loader-ring` y `@keyframes spinLoader`                                        |
| Duración, timing e iteraciones            | `.animate-rise`, `.loader-ring`, `.ticker`                                      |
| Responsive                                | Bootstrap 5 y `@media` del CSS                                                  |

## Ejemplos principales

```css
.effect-rotate:hover {
  transform: rotate(3deg);
}
.effect-scale:hover {
  transform: scale(1.05);
}
.effect-translate:hover {
  transform: translateY(-12px);
}
.perspective-scene {
  perspective: 1100px;
}
.three-d-card {
  transform-style: preserve-3d;
}
.perspective-scene:hover .three-d-card {
  transform: rotateX(18deg) rotateY(24deg);
}
@keyframes spinLoader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## Publicar en GitHub (terminal VS Code)

```bash
git init
git add .
git commit -m "PC3 StyleUp - Bootstrap y animaciones CSS"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/PC3-StyleUp.git
git push -u origin main
```

## Observaciones

- Las tres animaciones hover también funcionan con foco de teclado (`:focus-visible`).
- Se incorpora `prefers-reduced-motion` para accesibilidad.
- El formulario solo valida campos y presenta confirmación **local**, no envía mensajes reales.
- No se utilizó Angular porque la rúbrica PC3 requiere mostrar explícitamente Bootstrap 5 y CSS puro; la marca StyleUp sí corresponde al proyecto de tienda de ropa.
