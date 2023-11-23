import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';

declare var google: any;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  map = null;

  constructor(private geo: Geolocation, private http: HttpClient) { }

  async getDireccion(lat: number, lng: number): Promise<string> {
    const apiKey = 'AIzaSyBWWNwMhbVQ5yZ-OHlP7kNRVU-YQ1UGrU4';
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

  async loadMap() {
    const mapEle: HTMLElement = document.getElementById('map')!;
    const myLatLng = await Geolocation.getCurrentPosition();
    const lat = myLatLng.coords.latitude;
    const lng = myLatLng.coords.longitude;
    this.map = new google.maps.Map(mapEle, {
      center: { lat, lng },
      zoom: 12,
      disableDefaultUI: true,
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      
      const marker = {
        position: {
          lat: lat,
          lng: lng
        },
        title: 'Estas aqui'
      };
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
}
