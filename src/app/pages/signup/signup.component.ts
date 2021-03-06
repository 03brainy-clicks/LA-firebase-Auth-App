import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;
    //TODO: do your checking here
    this.auth
      .signUp(email, password)
      .then((res) => {
        this.router.navigateByUrl('/');
        this.toastr.success("signup successful");

      })
      .catch((err) => {
        console.log(err.message);
        this.toastr.error("signup failed");
      });
  }
}
