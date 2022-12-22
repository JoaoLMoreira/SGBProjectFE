import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BovinoService {
  private endpoint = environment.backendUrl + 'bovinos';
  
  constructor(private http: HttpClient) { }
  
  getAll(){
    return this.http.get<any[]>("https://localhost:7045/api/bovinos")
  }

  getOne(id:string){
    return this.http.get<any>(this.endpoint + '/' +id)
  }

  create(data:any){
    return this.http.post<any>(this.endpoint, data)
  }

  update(id:string, data:any){
    return this.http.put<any>(this.endpoint + '/' +id, data)
  }

  delete(id:string, motivo:number){
    return this.http.get<any>(this.endpoint + '/' + id + '/' + motivo)
  }

}
