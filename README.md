# Heroes APP (React JS)
![alt text](image.png)

Proyecto parte del curso de Fernando Herrera https://www.udemy.com/course/react-cero-experto

This project was bootstrapped with [Vite](https://vitejs.dev/guide/).

Conceptos practicados en este proyecto:

- React Router
- Navigate
- useMemo
- animaciones
- protección de rutas
- login
- Context
- Reducer
 
 Levantado en https://makadown.github.io/react-heroes-app/
 
 
## Recursos
 
React Router 6.4.4
```
https://reactrouter.com/en/6.4.4/start/tutorial#setup
npm install react-router-dom localforage match-sorter sort-by
``` 

Query String
```
npm install query-string
```

# Instalación y configuracion de Jest + React Testing Library
## En proyectos de React + Vite

1. Instalaciones:
```
npm install --dev jest babel-jest @babel/preset-env @babel/preset-react 
npm install --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
npm install --dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.js__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.js__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

6. TROUBLESHOOTER (aplicar solo si truenan las pruebas)

Es probable que sea necesario renombrar 
- __babel.config.js__ por __babel.config.cjs__
- __jest.config.js__ por __jest.config.cjs__