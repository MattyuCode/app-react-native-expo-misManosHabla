## para iniciar el proyecto
*Ejecutar en la terminal lo siguiente*

```
npm install --force
```
*Luego ejecutar lo siguiente*
```
npm run start
```


## PARA HACER EL DEPLOY EN EXPO

* Install the latest EAS CLI
```git 
    npm install -g eas-cli
```

* Log in to your Expo account
```git 
    eas login
```

* Configurar el proyecto
```git 
    eas build:configure
```

* Para ver la App de prueba en modo alpha
```git 
    eas build -p android --profile preview
```