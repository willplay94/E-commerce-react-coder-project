# E-commerce React - Coder Project

Un proyecto de e-commerce construido con React 19 y Vite, utilizando JavaScript moderno (ES modules) y una arquitectura basada en componentes.

## Tecnologías

- **React 19.2.0** - Biblioteca de UI
- **Vite 7.2.2** - Build tool y servidor de desarrollo
- **ESLint** - Linter para calidad de código
- **@vitejs/plugin-react** - Plugin de Vite con Babel para Fast Refresh

## Estructura del Proyecto

```
src/
├── components/
│   ├── common/           # Componentes reutilizables
│   │   ├── NavBar/       # Barra de navegación
│   │   └── CartWidget/   # Widget del carrito de compras
│   └── pages/            # Componentes de páginas
│       └── Home/         # Página principal
├── App.jsx              # Componente raíz
├── App.css              # Estilos de la aplicación
└── main.jsx             # Punto de entrada
```

Cada componente está organizado en su propia carpeta con un archivo `index.jsx` como punto de entrada, permitiendo la co-ubicación de estilos, tests o sub-componentes en el futuro.

## Componentes Implementados

### Common Components
- **NavBar** - Barra de navegación principal con logo y enlaces
- **CartWidget** - Widget que muestra el carrito de compras

### Pages
- **Home** - Página principal de la aplicación

## Comandos Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo de Vite.