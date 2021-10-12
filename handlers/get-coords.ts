import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';

type TCoords = {
  lat: number;
  lon: number;
}

export async function getCoords(): Promise<TCoords | undefined> {
  await requestForegroundPermissionsAsync();
  const location = await getCurrentPositionAsync();
  const { longitude, latitude } = location.coords;
  return ({ lon: longitude, lat: latitude });
}
