import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {
  list: any;
  closeModal: any;

  createForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required])
  });

  updateForm = new FormGroup({
    Id: new FormControl(),
    Name: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Status: new FormControl(),
    Dt_Create: new FormControl(),
  });

  detailsForm = new FormGroup({
    Id: new FormControl(),
    Name: new FormControl(),
    LastName: new FormControl(),
    Email: new FormControl(),
    Status: new FormControl(),
    Dt_Create: new FormControl(),
  });

  deleteForm = new FormGroup({
    Id: new FormControl(),
    Name: new FormControl(),
    LastName: new FormControl(),
    Email: new FormControl(),
    Status: new FormControl(),
    Dt_Create: new FormControl(),
  });

  constructor(
    private userService: UserService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.GetAllUser();
  }

  GetAllUser() {
    this.userService.GetAllUser().subscribe(resp => {
      this.list = resp;
    });
  }

  // Create
  openModalCreate(modal: any) {
    this.createForm.reset();
    this.openModal(modal);
  }

  create() {
    this.userService.create(this.createForm.value).subscribe(resp => {
      this.GetAllUser();
      this.modalService.dismissAll();
    });
  }

  // Edit
  openModalEdit(user: any, modal: any) {
    this.updateForm = new FormGroup({
      Id: new FormControl(user.id),
      Name: new FormControl(user.name, [Validators.required]),
      LastName: new FormControl(user.lastName, [Validators.required]),
      Email: new FormControl(user.email, [Validators.required]),
      Status: new FormControl(user.status),
      Dt_Create: new FormControl(user.dt_Create),
    });

    this.openModal(modal);
  }

  update() {
    this.userService.update(this.updateForm.value).subscribe(resp => {
      this.GetAllUser();
      this.modalService.dismissAll();
    });
  }

  // Details
  openModalDetails(user: any, modal: any) {
    this.detailsForm = new FormGroup({
      Id: new FormControl(user.id),
      Name: new FormControl(user.name),
      LastName: new FormControl(user.lastName, [Validators.required]),
      Email: new FormControl(user.email, [Validators.required]),
      Status: new FormControl(user.status),
      Dt_Create: new FormControl(user.dt_Create),
    });

    this.openModal(modal);
  }

   // Delete
  openModalDelete(user: any, modal: any) {
    this.deleteForm = new FormGroup({
      Id: new FormControl(user.id),
      Name: new FormControl(user.name),
      LastName: new FormControl(user.lastName),
      Email: new FormControl(user.email),
      Status: new FormControl(user.status),
      Dt_Create: new FormControl(user.dt_Create),
    });

    this.openModal(modal);    
  }

  delete() {
    this.userService.delete(this.deleteForm.value.Id).subscribe(resp => {
      this.GetAllUser();
      this.modalService.dismissAll();
    });
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
