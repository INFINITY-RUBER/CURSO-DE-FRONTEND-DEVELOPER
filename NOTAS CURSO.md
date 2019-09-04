## ¿Qué son y para qué nos sirven HTML y CSS?
**HTML**: Es un lenguaje de marcado usado para decirle a tu navegador cómo estructurar las páginas web que visitas. No es un lenguaje de programación.

**CSS**: Es un lenguaje que nos permite crear páginas web con un diseño agradable para los usuarios. Tampoco es un lenguaje de programación.
-https://htmlreference.io/
-https://cssreference.io/
## DOM, CSSOM, Render Tree y el proceso de renderizado de la Web
**DOM**: Document Object Model. Es una transformación del código HTML escrito por nosotros a objetos entendibles para el navegador.
**CSSOM**: así como el DOM para el HTML, EL CSSOM es una representación de objetos de nuestros estilos en CSS.
**Render Tree**: es la unión entre el DOM y el CSSOM para renderizar todo el código de nuestra página web.
Pasos que sigue el navegador para construir las páginas web:
1-Procesa el HTML para construir el DOM.
2-Procesa el CSS para construir el CSSOM.
3-El DOM se une con el CSSOM para crear el Render Tree.
4-Se aplican los estilos CSS en el Render Tree.
5-Se ““pintan”” los nodos en la pantalla para que los usuarios vean el contenido de la página we
##Anatomía de un Elemento HTML: Atributos, Anidamiento y Elementos vacíos
Nuestros elementos HTML se componen de:
Etiqueta de apertura: el nombre de nuestra etiqueta encerrado entre símbolos de mayor o menor. Por ejemplo: `<h1>`.
Contenido: dentro de nuestras etiquetas podemos añadir texto u otros elementos HTML, lo que conocemos como anidamiento.
Etiqueta de cierre: son casi iguales que las etiquetas de apertura, pero también necesitan un slash `(/)` antes del nombre de la etiqueta. Por ejemplo: `</h1>`.
Las etiquetas de apertura también pueden tener atributos. Los atributos nos permiten definir características especiales para nuestros elementos: `<etiqueta atributo=""valor del atributo"">.` Por ejemplo: `<h1 class=""saludo"">.`

También existen elementos vacíos. Estos elementos no tienen contenido ni etiqueta de cierre, solo etiqueta de apertura y atributos. Por ejemplo: <img src=""puppy.png"" alt=""mi mascota"">.
## La importancia del código semántico
Es importante que como desarrolladores tengamos claro el significado de escribir código. Debes ser consciente de que la manera en la que codeas tenga sentido.
La semántica HTML no es más que darle sentido y estructura a lo que estas escribiendo. Muy importante para el navegador. No todos los elementos deberían ser un div.
## Tipos de errores en HTML, debugging y servicio de validación de etiquetas
**Errores sintácticos**: Son errores de escritura en el código y evitan que el programa funcione. Pueden ser errores de tipado.
**Errores lógicos**: En estos la sintaxis es correcta, pero el código no hace lo que debería. El programa funciona, pero de forma incorrecta.
-https://validator.w3.org/
## Anatomía de una declaración CSS: Selectores, Propiedades y Valores
Nuestros estilos con CSS se componen de:
**Selector**: son la referencia a los elementos HTML que queremos estilizar. Los nombres de estas etiquetas van seguidas de una llave de apertura y otra de cierre ({}). Por ejemplo: h1 {}.
**Propiedades**: son el tipo de estilo que queremos darle a nuestros elementos. Van seguidas de dos puntos (:). Las propiedades deben estar dentro de las llaves del selector que definimos anteriormente. Podemos escribir diferentes propiedades en un mismo selector. Por ejemplo: h1 { color: }.
**Valores**: son el estilo que queremos que tomen nuestros elementos HTML con respecto a una propiedad. Van seguidas de un punto y coma (;). Por ejemplo: h1 { color: red; }.
## Tipos de selectores, pseudo-clases y pseudo-elementos
Tipo: Son selectores que se aplican a cierto elemento HTML en específico. Las propiedades se aplicaran a la etiqueta que queremos, por ejemplo p, body, html, div, etc.
Clase: Si nuestras etiqueta de HTML tienen un atributo de class podemos usar ese valor o identificador para que los cambios en el CSS afecten únicamente a ese elemento.
ID: Es similar al anterior, si la etiqueta HTML tiene un ID podemos afectar solo ese elemento.
Las Pseudo-clases y Pseudo-elementos nos permiten ser aún más específicos con qué elemento o partes de nuestros elementos deben recibir los estilos.
Para usarlas debemos definir el selector base (por ejemplo, p) seguido de dos puntos y la pseudo-clase que queremos estilizar (por ejemplo: p:first-child). En el caso de los pseudo-elementos debemos usar el dos puntos 2 veces (p::first-letter).
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
EMOJIS: https://coolsymbol.com/emojis/emoji-for-copy-and-paste.html
`
/* Asterisco (universal) */
* {
  margin: 0; todos los selectores se aplica esta regla
}
/* Tipo */ no es aconsejable para app grandes
h1 {
  color: red;
}
/* Clase */
.saludo {
  font-size: 2em;
}
/* ID */
#id {
  border-radius: 20px;
}
/* Pseudo-clases */
p:first-child { <!-- colorea el primero -->
  color: white; afecta
}
p:last-child {
  color: purple; <!-- colorea el ultimo -->
}
p:nth-child(2n) {
  color: red; <!-- colorea los pares -->
}
p:nth-child(2n+1) {
  color: red; <!-- colorea los impares -->
}
/* Pseudo-elemnto */
p::first-lette{
  olorcolor: red; <!-- colorea la primera letras -->
}
`
## Modelo de caja
Todos los elementos de HTML tienen un modelo de caja y esta compuesto por cuatro elementos: **contenido**,**padding**, **border**, **margin**.
https://picular.co/Video
http://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF
https://coolors.co/001514-fbfffe-6b0504-a3320b-e6af2e
## Valores relativos y absolutos
-https://coolors.co/5e1dfc-ab88ff-8f57fd-21c08b-e6af2e
Los valores absolutos son, por ejemplo, centímetros, milímetros, pixeles y pulgadas. Se llaman de esta forma porque no tienen en cuenta a nadie más, no depende de la medida de otra unidad.
Los valores relativas, llevan este nombre porque depende de otra unidad de medida o elemento. Por ejemplo, porcentajes, vmx, em, entre otros.
Recuerda que podemos darle estilos a etiquetas HTML muy específicas indicando dónde se van a encontrar. Por ejemplo: si queremos darle estilos únicamente a la imagen que está dentro del header, podemos usar el selector css header img { ... }.
No olvides resolver el desafío: crear tu propio header con las etiquetas y estilos que más te gusten para compartirlo en la sección de discusiones.
## Posicionamiento en CSS
El posicionamiento en CSS es una de las cosas más importantes, pues establece cómo van a estar ubicados nuestros elementos en la pantalla.
En CSS los elementos se posicionan utilizando las propiedades top (superior), bottom (inferior), left (izquierda) y right (derecha), pero sólo funcionarán si la propiedad position está establecida. Esto quiere decir que si quiero que mi elemento div esté completamente a la derecha, debo escribir en mi CSS lo siguiente:
div { position: absolute: right: 0px; }
La propiedad position tiene 7 valores diferentes: relative, absolute, fixed, sticky, static, initial e inherit. Veremos de qué se tratan:
## OOCSS, BEM, SMACSS, ITCSS y Atomic Design
-https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/
-http://getbem.com/introduction/
-http://smacss.com/
-https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
-http://bradfrost.com/blog/post/atomic-web-design/
## ¿Qué es un componente? Analicemos nuestros diseños
En esta clase la profesora Estefany Aguilar nos explica qué es un componente en el mundo del frontend. También analizaremos el diseño del proyecto del curso.
Un componente, tanto en diseño como desarrollo web, es un elemento muy pequeño que tiene la capacidad de ser reutilizado en diferentes partes de una aplicación. Por ejemplo: botones, iconos, cards, entre otras. Puedes apreciarlos en las plataformas que visitas todos los días: Twitter, Facebook, Platzi, YouTube y muchas más.
## Flexbox
Uno de los trabajos más difíciles en CSS es alinear elementos. Para hacerlo más fácil podemos contar con Flexbox.
Es importante tener presente que tendremos un contenedor y los elementos que queremos organizar dependiendo de nuestras necesidades.
-https://css-tricks.com/snippets/css/a-guide-to-flexbox/
-https://flexboxfroggy.com/#es
-https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
-https://platzi.com/clases/html5-css3/
-https://platzi.com/clases/1350-html5-css3/13369-propiedades-de-flexbox/
-https://platzi.com/blog/flexbox-vs-css-grid-cual-es-la-diferencia/
## Nuestro nuevo sistema de layout: CSS Grid
Con CSS Grid podemos maquetar todo el layout/estructura general de nuestro sitio para que se adapten a diferentes tamaños de pantalla, lo que conocemos como diseño responsivo.
Al igual que Flebox, tenemos propiedades diferentes, tanto para el contenedor como para los elementos, y podemos usarlos dependiendo de nuestras necesidades.
-https://css-tricks.com/snippets/css/complete-guide-grid/
-https://developer.mozilla.org/en-US/docs/Web/CSS/grid
-https://labs.jensimmons.com/
-https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag
-https://cssgridgarden.com/#es
-https://platzi.com/clases/css-grid-layout/

## Estructura con HTML y BEM de un menú desplegable
-https://iconos8.es/  bajar iconos

## Estilizando nuestro menú desplegable con CSS
``
``
``
``
``
``
