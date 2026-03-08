# TeLlevoApp - Solución de Carpooling Móvil

**TeLlevoApp** es una aplicación móvil híbrida diseñada para facilitar el transporte colaborativo (carpooling) entre estudiantes y trabajadores. Desarrollada con **Ionic** y **Angular**, la aplicación permite a los usuarios ofrecer o buscar viajes, integrando servicios de geolocalización en tiempo real.

## 🚀 Características Principales

### 📍 Geolocalización y Mapas
- **Integración con Google Maps API:** Visualización de mapas interactivos y marcadores de posición.
- **Geocodificación Inversa:** Conversión automática de coordenadas GPS a direcciones legibles mediante servicios REST.
- **Seguimiento en Tiempo Real:** Uso de `@capacitor/geolocation` para obtener la ubicación precisa del usuario.

### 🚗 Gestión de Viajes
- **Creación de Viajes:** Los conductores pueden publicar rutas, definir cupos y establecer puntos de encuentro.
- **Buscador Inteligente:** Filtros para encontrar viajes disponibles según destino y horario.
- **Flujo de Pago:** Simulación de pasarela de pagos integrada para la reserva de asientos.

### 🔐 Seguridad y Persistencia
- **Autenticación Robusta:** Sistema de login y registro con validación de datos.
- **Guards de Navegación:** Protección de rutas mediante `AuthGuard` para asegurar que solo usuarios autenticados accedan a funciones críticas.
- **Almacenamiento Local:** Uso de `@ionic/storage-angular` para mantener la sesión y persistir datos del usuario y viajes de forma eficiente.

## 🛠️ Stack Tecnológico
- **Framework:** [Ionic 7+](https://ionicframework.com/) con [Angular 16](https://angular.io/)
- **Runtime:** [Capacitor 5](https://capacitorjs.com/) (para acceso nativo a GPS y Almacenamiento)
- **Lenguaje:** TypeScript
- **APIs Externas:** Google Maps JavaScript API & Geocoding API
- **UI/UX:** Ionic UI Components & Angular Material para una experiencia nativa y fluida.

## 📋 Requisitos
- [Node.js](https://nodejs.org/) (v16 o superior)
- [Ionic CLI](https://ionicframework.com/docs/intro/cli)
- [Android Studio](https://developer.android.com/studio) (para despliegue en Android)

## 🔧 Instalación y Despliegue

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd TeLlevoApp
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en el navegador (Desarrollo):**
   ```bash
   ionic serve
   ```

4. **Preparar para Android:**
   ```bash
   ionic cap add android
   ionic cap copy
   ionic cap open android
   ```

## 📂 Estructura del Proyecto
- `src/app/Servicios/`: Lógica de negocio (Autenticación, Persistencia, API Maps).
- `src/app/home/`: Dashboard principal del usuario.
- `src/app/crear-viaje/`: Módulo de publicación para conductores.
- `src/app/buscar-viaje/`: Módulo de búsqueda para pasajeros.

---
*Este proyecto demuestra habilidades avanzadas en el desarrollo de aplicaciones móviles híbridas, integración de hardware (GPS), consumo de APIs externas y gestión de estado persistente.*
