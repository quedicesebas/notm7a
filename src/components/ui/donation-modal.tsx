
"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[85vh] p-0 overflow-hidden flex flex-col">
        <DialogHeader className="p-4 border-b bg-card">
          <DialogTitle className="text-primary">Apoya nuestra causa</DialogTitle>
          <DialogDescription>
            Tu contribución ayuda a financiar nuestras acciones legales y de comunicación.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 relative bg-white">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
              <div className="text-center space-y-4 w-full px-8">
                <Skeleton className="h-12 w-3/4 mx-auto" />
                <Skeleton className="h-64 w-full" />
                <p className="text-muted-foreground animate-pulse">Cargando plataforma de donación...</p>
              </div>
            </div>
          )}
          <iframe
            src="https://armatuvaca.com/participante/yc131858YfH96730"
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            title="Donar a Defendamos la Séptima"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
