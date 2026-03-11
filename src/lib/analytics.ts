"use client";

import { logEvent, isSupported, getAnalytics } from "firebase/analytics";
import { app } from "./firebase";

/**
 * Función utilitaria para registrar eventos personalizados en Google Analytics
 * de forma segura (verifica si el navegador lo soporta y si estamos en el cliente).
 */
export const trackEvent = async (eventName: string, eventParams?: Record<string, any>) => {
  try {
    if (typeof window !== "undefined") {
      const supported = await isSupported();
      if (supported) {
        const analytics = getAnalytics(app);
        logEvent(analytics, eventName, eventParams);
        console.log(`Evento enviado: ${eventName}`, eventParams); // Solo para que puedas verificar en consola localmente
      }
    }
  } catch (error) {
    console.error("Error enviando evento a Analytics", error);
  }
};
