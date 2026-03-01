// hooks/useStackData.ts
import { useQuery } from '@tanstack/react-query';
import {fetchStackData} from "@/lib/services/stack";

export const useStackData = () => {
  return useQuery({
    queryKey: ['stackData'],
    queryFn: fetchStackData,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};