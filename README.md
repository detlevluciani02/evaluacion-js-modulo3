# Informe – Evaluación Módulo 3

## ¿Qué hace tu página?
La página web, diseñada para la marca "COLLECTIONS", funciona como un portal de bienvenida y primer contacto para coleccionistas de tarjetas de baloncesto. Su interfaz permite que el usuario ingrese su nombre para recibir un saludo personalizado y obtener un reporte instantáneo sobre la cantidad de caracteres que contiene su nombre, simulando una interacción básica de gestión de clientes.

## ¿Qué aprendiste al hacerla?
Al desarrollar este proyecto, aprendí a integrar tres pilares fundamentales del desarrollo web: la estructura (HTML), el diseño visual (CSS) y la lógica de interacción (JavaScript). Comprendí la importancia de la manipulación del DOM para crear interfaces dinámicas y la necesidad de mantener un código limpio y modular para asegurar que la comunicación entre scripts y elementos de la página sea efectiva.

## ¿Qué estructuras de JavaScript usaste?
Para cumplir con los requerimientos técnicos, utilicé las siguientes estructuras:
*   **Variables:** Empleo de `var` y `const` para almacenar datos del usuario y elementos del DOM.
*   **Estructuras condicionales:** Uso de bloques `if / else` para validar si el campo de texto está vacío y mostrar los mensajes correspondientes según el resultado.
*   **Funciones:** Creación de una función principal (`procesar()`) para encapsular la lógica del saludo y la validación.
*   **Eventos:** Implementación de eventos de usuario (como `onclick`) para capturar la interacción y disparar la lógica programada.

## ¿Qué parte te costó más?
La parte que me presentó mayores desafíos fue la resolución de problemas de ejecución local en el navegador, específicamente asegurar que el código JavaScript se enlazara correctamente y no fuera bloqueado por configuraciones de caché o seguridad del navegador. Ajustar el flujo de trabajo para garantizar que el DOM estuviera listo para interactuar con los eventos fue un aprendizaje crucial.

## ¿Qué mejorarías si tuvieras más tiempo?
Si tuviera más tiempo, implementaría:
1.  **Persistencia de datos:** Utilizaría `localStorage` para guardar el nombre del usuario y personalizar la experiencia en futuras visitas.
2.  **Validaciones avanzadas:** Añadiría filtros mediante expresiones regulares para evitar números o caracteres especiales en el nombre.
3.  **Animaciones CSS:** Incorporaría transiciones más fluidas al mostrar el saludo y el conteo de caracteres para mejorar la experiencia de usuario (UX).
4.  **Integración de API:** Conectaría la página con una API real de estadísticas de baloncesto para mostrar información dinámica de jugadores.
