"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const querClient = new QueryClient();

export default function QueryProvider({children}){
    
    return ( 
        <QueryClientProvider client={querClient}>
            {children}
        </QueryClientProvider>
    )
}