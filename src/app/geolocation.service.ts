import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private geo: Geolocation, private http: HttpClient) { }

  async getDireccion(lat: number, lng: number): Promise<string> {
    const apiKey = '';
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
  
    try {
      const response = await this.http.get(apiUrl).toPromise();
      const address = (response as any).results[0]['formatted_address'];
      console.log(address);
      return address;
    } catch (error) {
      console.error('Error al obtener la dirección:', error);
      return 'Error al obtener la dirección';
    }
  }

  async obtenerDireccionActual() {
    try {
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000,
      });
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
  
      const direccion = await this.getDireccion(lat, lng);
      console.log('Dirección actual:', direccion);
      return direccion;
    } catch (error) {
      console.error('Error al obtener la posición:', error);
      throw error;
    }
  }
}
