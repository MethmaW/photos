import { Component, OnInit } from "@angular/core";
import { PhotoService } from "../photo.service";

@Component({
	selector: "app-display-photo",
	templateUrl: "./display-photo.component.html",
	styleUrls: ["./display-photo.component.css"],
})
export class DisplayPhotoComponent implements OnInit {
	photoUrl = "";

	constructor(private photoService: PhotoService) {
		this.fetchPhoto();
	}

	onClick() {
		this.fetchPhoto();
	}

	fetchPhoto() {
		this.photoService.getRandomPhoto().subscribe((url) => {
			this.photoUrl = url;
		});
	}

	ngOnInit(): void {}
}
