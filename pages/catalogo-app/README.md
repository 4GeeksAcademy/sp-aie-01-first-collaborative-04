# Catálogo de Productos

Este proyecto es una aplicación de catálogo de productos construida con React y TypeScript. La aplicación incluye una barra de navegación, una barra de filtros, una rejilla de productos y un pie de página.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
catalogo-app
├── src
│   ├── components
│   │   ├── Navbar.tsx        # Componente de la barra de navegación
│   │   ├── Footer.tsx        # Componente del pie de página
│   │   ├── FilterBar.tsx     # Componente de la barra de filtros
│   │   ├── ProductGrid.tsx    # Componente que renderiza la rejilla de productos
│   │   └── ProductCard.tsx    # Componente que representa un producto individual
│   ├── data
│   │   └── products.ts       # Datos de los productos disponibles
│   ├── types
│   │   └── index.ts          # Definiciones de tipos e interfaces
│   ├── App.tsx               # Punto de entrada de la aplicación
│   ├── main.tsx              # Renderiza el componente App en el DOM
│   └── styles.css            # Estilos globales de la aplicación
├── index.html                # Plantilla HTML principal
├── package.json              # Configuración de npm y dependencias
├── tsconfig.json             # Configuración de TypeScript
├── vite.config.ts            # Configuración de Vite
└── README.md                 # Documentación del proyecto
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```
npm install
```

## Ejecución

Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```
npm run dev
```

Esto abrirá la aplicación en tu navegador predeterminado.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un pull request o crea un issue para discutir los cambios que te gustaría hacer.

## Licencia

Este proyecto está bajo la licencia MIT.