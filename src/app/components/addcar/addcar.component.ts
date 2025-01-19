import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent {
  carForm: FormGroup;
  fields: any[] = [
    { label: 'Marque', name: 'brand', type: 'text', isSelect: false },
    { label: 'Modèle', name: 'model', type: 'text', isSelect: false },
    { label: 'Plaque d\'immatriculation', name: 'licenceplate', type: 'text', isSelect: false },
    { label: 'Statut', name: 'status', type: 'text', isSelect: true, options: ['Disponible', 'Indisponible', 'En maintenance'] },
    { label: 'Prix par jour', name: 'pricePerDay', type: 'number', isSelect: false },
    { label: 'Kilométrage', name: 'kolometrage', type: 'number', isSelect: false },
    { label: 'Date de fabrication', name: 'dateFabrication', type: 'datetime-local', isSelect: false }
  ];
  car: any = {
    brand: '',
    model: '',
    licenceplate: '',
    status: '',
    pricePerDay: null,
    kolometrage: null,
    dateFabrication: '',
    image: null
  };
  imagePreview: string | ArrayBuffer | null = null; // For image preview

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.carForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      licenceplate: ['', Validators.required],
      status: ['', Validators.required],
      pricePerDay: [null, [Validators.required, Validators.min(0)]],
      kolometrage: [null, [Validators.required, Validators.min(0)]],
      dateFabrication: ['', Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.car.image = file;

      // Create a preview URL for the selected image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; // Set the image preview
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    // Check if the form is valid (all required fields are filled)
    if (this.carForm.invalid) {
      alert('Please fill in all fields.');
      return; // Stop the submission if the form is invalid
    }

    const token = "Bearer "+localStorage.getItem('tokenG');
    const formData = new FormData();
    formData.append('brand', this.carForm.get('brand')?.value);
    formData.append('model', this.carForm.get('model')?.value);
    formData.append('licenceplate', this.carForm.get('licenceplate')?.value);
    formData.append('status', this.carForm.get('status')?.value);
    formData.append('pricePerDay', this.carForm.get('pricePerDay')?.value.toString());
    formData.append('kolometrage', this.carForm.get('kolometrage')?.value.toString());
    formData.append('dateFabrication', this.carForm.get('dateFabrication')?.value);
    if (this.car.image) {
      formData.append('image', this.car.image);
    }

    const headers = new HttpHeaders().set('Authorization', token);

    this.http.post('http://localhost:8080/voiture/add', formData, { headers })
      .subscribe(
        (response) => {
          alert("Voiture ajoutée avec succès !");
          console.log("Réponse du serveur:", response);
          
          // Reset the form and clear the image preview after successful submission
          this.carForm.reset();
          this.imagePreview = null; // Clear the image preview
        },
        (error) => {
          alert("Erreur lors de l'ajout de la voiture.");
          console.error("Erreur:", error);
        }
      );
  }
}
