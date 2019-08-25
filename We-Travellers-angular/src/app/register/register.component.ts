import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  userForm  : FormGroup;
  constructor(
    private fb: FormBuilder,
    private _userService: UsersService,
  ) { }
   
  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['', Validators.required],
      password: ['', Validators.required],
      cpassword:['',Validators.required]
  
      
    });
  }
  onSubmit() {
    let user = new User();
    user.fname= this.userForm.get('firstName').value
    user.lname= this.userForm.get('lastName').value
    user.email= this.userForm.get('email').value
    user.password= this.userForm.get('password').value
    user.cpassword= this.userForm.get('cpassword').value
  if (user.password == user.cpassword){
    this._userService.save(user).subscribe(
      () => {
        
          alert('user has been added succesfully.');
          this.userForm.setValue({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            cpassword: '',
          

      });

          
    }
    )
  }

}
}
