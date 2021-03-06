import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthLoginInfo } from '../jwt/auth-login-info';
import { AuthService } from '../jwt/auth.service';
import { TokenStorageService } from '../jwt/token.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  returnUrl: string;
  roles: string[] = [];
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  isNotLogin = 'Wrong username or password !!!';
  display = false;

  private loginInfo: AuthLoginInfo;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/login';

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      console.log(this.isLoggedIn);
    }
    this.form = {
      id: this.tokenStorage.getId(),
      email: this.tokenStorage.getEmail(),
      name: this.tokenStorage.getUsername(),
      token: this.tokenStorage.getToken(),
    };
  }

  onSubmit() {
    const {username, password} = this.loginForm.value;

    const loginFormAuth = new AuthLoginInfo(username, password);

    this.authService.attemptAuth(loginFormAuth).subscribe(
      data => {
        this.tokenStorage.saveId(data.id);
        this.tokenStorage.saveEmail(data.email);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.name);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/items/']).then(r => console.log('success to navigate'));
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this.display = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
