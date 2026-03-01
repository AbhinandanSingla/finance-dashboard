export interface CityData {
  id: number;
  name: string;
  metric: string;
  percentage: number;
  trend: 'up' | 'down';
  chartData: number[];
}

export const mockCities: CityData[] = [
  { id: 1, name: 'City 1', metric: '45.7M', percentage: 65, trend: 'up', chartData: [10, 30, 20, 50, 40] },
  { id: 2, name: 'City 2', metric: '79.2T', percentage: 62, trend: 'down', chartData: [50, 40, 60, 30, 45] },
];