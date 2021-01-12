import { User } from "./user";

export class UserParams{
    gender: string;
    nativeLanguage: string;
    targetLanguage: string;
    minAge = 18;
    maxAge= 99;
    pageNumber = 1;
    pageSize = 5;

    constructor(user: User){
        //this.gender = user.gender === 'female'? 'male': 'female';
        //this.nativeLanguage = user.nativeLanguage === 'portuguese'? 'english': 'portuguese';
    }
}