import { Photo } from './photo';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API = 'http://localhost:3000'

@Injectable()

export class PhotoService {

  constructor(private http: HttpClient){  }

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(`${API}/${userName}/photos`)
  }

}
