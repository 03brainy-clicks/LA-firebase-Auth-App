import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: any = null;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.auth.getUser().subscribe((user) => {
      this.email = user?.email;
    });
  }

  ngOnInit(): void {

  }

  async handleSignOut() {
    try {
      let res = await this.auth.signOut();
      this.router.navigateByUrl('sign-in');
      this.email = null;
    } catch (error) {
      alert("something went wrong");
    }
  }

}
