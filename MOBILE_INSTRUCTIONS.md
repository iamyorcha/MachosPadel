# 🚀 Guía Definitiva para Generar APK (Android) e IPA (iOS) y Publicar en Stores

Tu proyecto ya tiene **todas las plataformas nativas generadas y sincronizadas** (`android/` y `ios/` con Capacitor), así como los estándares de PWA con iconos de alta resolución (`192x192`, `512x512` y maskable).

A continuación tienes las **3 formas más efectivas** de obtener tus archivos `.apk` / `.aab` (Android) e `.ipa` (iOS):

---

## ⚡ Método 1: La forma más rápida (PWABuilder de Microsoft - Sin Mac ni instalaciones)
Es la herramienta oficial recomendada por Google y Microsoft para publicar Progressive Web Apps directamente en Google Play Store y Apple App Store.

1. Entra en [PWABuilder.com](https://www.pwabuilder.com).
2. Pega la URL pública de tu aplicación:
   ```
   https://ais-pre-hk7fu45qsxgnru55723dpa-22710877709.us-west1.run.app
   ```
3. Haz clic en **"Start"**. La herramienta evaluará tu app (obtendrá un puntaje perfecto de PWA porque ya configuramos el `manifest.json`, Service Worker e iconos).
4. Haz clic en **"Package for Stores"**:
   - **Google Play (Android)**: Selecciona "Generate Package". Te descargará un archivo `.aab` (Android App Bundle) y el `.apk` listos para subir a la consola de [Google Play Console](https://play.google.com/console).
   - **Apple App Store (iOS)**: Selecciona "Generate Package". Te descargará el paquete empaquetado para iOS compatible con TestFlight y App Store.

---

## 🤖 Método 2: En la nube mediante GitHub Actions (100% Automático y Gratis)
Ya hemos creado en tu proyecto el archivo de automatización:
`/.github/workflows/build-mobile.yml`

Cuando descargues o sincronices tu repositorio con GitHub:
1. Sube tu código a un repositorio en **GitHub**.
2. Ve a la pestaña **"Actions"** en tu repositorio de GitHub.
3. Verás el flujo **"Build Mobile Apps (Android APK/AAB & iOS)"**.
4. GitHub asignará servidores virtuales (incluyendo máquinas **macOS** de Apple) para compilar:
   - El `.apk` (instalable directo en celulares Android).
   - El `.aab` (formato oficial requerido por Google Play Store).
   - El paquete iOS compilado con Xcode.
5. Al terminar, ve a la sección **Artifacts** y descarga directamente los archivos a tu computadora.

---

## 💻 Método 3: Compilación Local (Android Studio & Mac Xcode)
Las carpetas nativas ya están creadas en tu proyecto:

### Para Android:
1. Instala **Android Studio** en tu PC o Mac.
2. Abre la carpeta `android/` de este proyecto.
3. Espera a que Gradle termine de indexar.
4. Para probar en tu celular: Conecta tu teléfono por USB con Depuración USB activa y presiona **Play (Run)**.
5. Para generar el instalador final: Ve al menú **Build > Generate Signed Bundle / APK**:
   - Selecciona **Android App Bundle** (para Google Play).
   - O selecciona **APK** (para pasarlo por WhatsApp o instalarlo directo).

### Para iOS (iPhone):
1. En una Mac, abre el archivo:
   `ios/App/App.xcworkspace` en **Xcode**.
2. En la pestaña *Signing & Capabilities*, selecciona tu equipo de desarrollador de Apple (*Team*).
3. Conecta un iPhone o selecciona un simulador para probar.
4. Para subir a App Store: En el menú superior de Xcode, ve a **Product > Archive**, y luego haz clic en **Distribute App** para enviarla directo a **App Store Connect**.

---

## 📋 Cuentas necesarias para publicar en las Stores:
1. **Google Play Console**: $25 USD (pago único de por vida).
2. **Apple Developer Program**: $99 USD/año (requerido por Apple para tener presencia en la App Store).
