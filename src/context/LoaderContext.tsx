import { createContext, ReactNode, useContext, useState } from "react";

interface LoaderContextData {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}

interface LoaderProviderProps {
  children: ReactNode;
}

const LoaderContext = createContext<LoaderContextData | undefined>(undefined);

export function LoaderProvider({ children }: LoaderProviderProps) {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader(): LoaderContextData {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader deve ser usado dentro de um LoaderProvider");
  }
  return context;
}