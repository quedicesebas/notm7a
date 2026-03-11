"use client";

import { useEffect } from "react";
import { app } from "@/lib/firebase";
import { getAnalytics, isSupported } from "firebase/analytics";

export default function FirebaseAnalytics() {
  useEffect(() => {
    const initAnalytics = async () => {
      try {
        const supported = await isSupported();
        if (supported) {
          getAnalytics(app);
        }
      } catch (err) {
        console.error("Error inicializando Firebase Analytics", err);
      }
    };
    
    initAnalytics();
  }, []);

  return null;
}
