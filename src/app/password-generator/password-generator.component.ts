import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css'],
})
export class PasswordGeneratorComponent {
  password: string = '';
  passwordLen: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSplChars: boolean = false;
  msgOnPassLenError: string = 'Password length must be greater than 8!!!';
  msgOnChkBxError: string = 'Select below password varity';
  genBtnDisable: boolean = false;

  onChangeLength(event: any) {
    console.log('setPasswordLength ::' + event.target.value);
    const parsedValue = parseInt(event.target.value);
    if (parsedValue < 8) {
      alert(this.msgOnPassLenError);
      this.genBtnDisable = !this.genBtnDisable;
    } else {
      this.genBtnDisable = false;
    }
    console.log(
      'parsed password length ::' +
        event.target.value +
        ', Parsed Value:: ' +
        parsedValue
    );
    if (!isNaN(parsedValue)) {
      this.passwordLen = parsedValue;
    } else {
      this.passwordLen = 0;
    }
  }

  onChangeUseLetters() {
    console.log('onChangeUseLetters:: ' + this.includeLetters);
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    console.log('onChangeUseNumbers:: ' + this.includeNumbers);
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSplChars() {
    console.log('onChangeUseSplChars:: ' + this.includeSplChars);
    this.includeSplChars = !this.includeSplChars;
  }

  onGenerateButtonClick() {
    console.log('new password about to be generated!');
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '123456789';
    const specialCharaters = '!@#$%^&*(){}[]_-';

    let passwordCombinations = '';
    let pwd = '';

    if (this.includeLetters) {
      passwordCombinations += chars;
    }
    if (this.includeNumbers) {
      passwordCombinations += numbers;
    }
    if (this.includeSplChars) {
      passwordCombinations += specialCharaters;
    }

    if (passwordCombinations.length !== 0) {
      console.log(`
      About to create a password with following rules:
      Including Letters: ${this.includeLetters}
      Including Numbers: ${this.includeNumbers}
      Including Symbol: ${this.includeSplChars}
      PasswordCombination: ${passwordCombinations}
      Password Length: ${this.passwordLen}
      `);
      for (let i = 0; i < this.passwordLen; i++) {
        const randomIndex = Math.floor(
          Math.random() * passwordCombinations.length
        );
        console.log(randomIndex);
        pwd += passwordCombinations[randomIndex];
      }
    }
    this.password = pwd;
    console.log(this.password);
  }
}
