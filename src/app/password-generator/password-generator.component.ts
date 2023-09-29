import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css'],
})
export class PasswordGeneratorComponent {
  password: string = '';
  passwordLen: number = 0;
  isLetterChecked: boolean = false;
  isNumberChecked: boolean = false;
  isSplChChecked: boolean = false;

  letterArray: string[] = [];
  numberArray: string[] = [];
  specialCharaterArray: string[] = [];
  passArray: string[] = [];

  allChArray: string[] = [];
  setPasswordLength(num: any) {
    console.log('setPasswordLength' + num);
    this.passwordLen = num;
  }
  letterChecked() {
    console.log('letterChecked');
    this.isLetterChecked = !this.isLetterChecked;
  }

  numberChecked() {
    console.log('numberChecked');
    this.isNumberChecked = !this.isNumberChecked;
  }
  specialCharaterChecked() {
    console.log('specialCharaterChecked');
    this.isSplChChecked = !this.isSplChChecked;
  }

  onGenerateButtonClick() {
    console.log('new password generated!');
    this.letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    this.numberArray = '123456789'.split('');
    this.specialCharaterArray = '!@#$%^&*(){}[]_-'.split('');
    console.log(this.letterArray, this.numberArray, this.specialCharaterArray);

    if (this.isLetterChecked) {
      this.allChArray.push(...this.letterArray);
      console.log(this.allChArray, this.letterArray);
    }
    if (this.isNumberChecked) {
      this.allChArray.push(...this.numberArray);
      console.log(this.allChArray, this.numberArray);
    }
    if (this.isLetterChecked) {
      this.allChArray.push(...this.specialCharaterArray);
      console.log(this.allChArray, this.specialCharaterArray);
    }

    if (this.allChArray.length !== 0) {
      for (let i = 0; i < 10; i++) {
        const random = Math.floor(Math.random() * this.allChArray.length);
        console.log(random);
        this.passArray.push(this.allChArray[random]);
      }
    }

    this.password = this.passArray.join('');
    this.passArray = [];
    console.log(this.password);
  }
}
