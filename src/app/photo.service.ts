import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { pluck } from "rxjs/operators";

interface UnsplashResponse {
	urls: {
		regular: string;
	};
}

@Injectable({
	providedIn: "root",
})
export class PhotoService {
	constructor(private http: HttpClient) {}

	getRandomPhoto() {
		return this.http
			.get<UnsplashResponse>("https://api.unsplash.com/photos/random", {
				headers: {
					Authorization: "Client-ID eVcBTJguoASXGVmHFMxjTSyA2tKBpmAVk0lQDgxZ6JM",
				},
			})
			.pipe(pluck("urls", "regular"));
	}
}
