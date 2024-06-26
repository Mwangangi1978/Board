"use client"
// IMPORTING NECESSARY FILES
    // IMPORTING COMPONENTS
import ProgressBar from "@/components/ProgressBar"
    // IMPORT MODULES
import React from "react"
import { RecoilRoot } from "recoil";

// EXPORTING A FUNCTION THAT RETURNS THE LAYOUT OF THE WIZRD ROUTES
export default function WizardLayout({children}: Readonly<{children: React.ReactNode}>){
    return(
        <main className="bg-[#050012] min-h-screen transition-all duration-500 ease-in-out">
            <RecoilRoot>
          <ProgressBar />
          {children}
          </RecoilRoot>
        </main>
    )
}
