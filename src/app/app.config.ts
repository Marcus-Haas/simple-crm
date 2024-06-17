import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideNativeDateAdapter(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-8455b","appId":"1:365711961110:web:8110113e57d228355ad937","storageBucket":"simple-crm-8455b.appspot.com","apiKey":"AIzaSyAa9-PQfuApKB-8ymoRQf28n4brcQ2aaSk","authDomain":"simple-crm-8455b.firebaseapp.com","messagingSenderId":"365711961110"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
