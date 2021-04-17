import {Document, Schema, model} from 'mongoose'

//Abstract Class for Person???

//Person Class
export class Person {

    //Person Class Properties
    first_name:     string;
    middle_name?:    string;
    last_name:      string;
    preferred_name?: string;
    pronouns?:       string;
    birth_date:     Date;
    gender:         string;
    id_num:         number;
    user_type:      string;

    /**
     * Constructor for Person Class
     *
     * @param first_name is first name of person
     * @param middle_name is middle name of person
     * @param last_name is last name of person
     * @param preferred_name is preferred or nickname
     * @param pronouns is person's preferred pronouns
     * @param birth_date is person's birthday
     * @param gender is person's gender
     * @param id_num is person's unique id
     * @param user_type is person's type whether it be a swimmer, runner, etc...
     */
    constructor(first_name: string, middle_name?: string, last_name: string,
                preferred_name?: string, pronouns?: string, birth_date: Date,
                gender: string, id_num: number, user_type: string) {

        this.first_name = first_name;
        this.middle_name = middle_name;
        this.last_name = last_name;
        this.preferred_name = preferred_name;
        this.pronouns = pronouns;
        this.birth_date = birth_date;
        this.gender = gender;
        this.id_num = id_num;
        this.user_type = user_type;
    }
    //Getter and Setter for First Name
    public get first_name() : string {
      return this.first_name;
    }
    public set first_name(v : string) {
      this.first_name = v;
    }
    //Getter and Setter for Middle Name
    public get middle_name() : string {
      return this.middle_name;
    }
    public set middle_name(v : string) {
      this.middle_name = v;
    }
    //Getter and Setter for Last Name
    public get last_name() : string {
      return this.last_name;
    }
    public set last_name(v : string) {
      this.last_name = v;
    }
    //Getter and Setter for Preferred name
    public get preferred_name() : string {
      return this.preferred_name;
    }
    public set preferred_name(v : string) {
      this.preferred_name = v;
    }
    //Getter and Setter for pronouns
    public get pronouns() : string {
      return this.pronouns;
    }
    public set pronouns(v : string) {
      this.pronouns = v;
    }
    //Getter and Setter for birthday
    public get birth_date() : Date {
      return this.birth_date;
    }
    public set birth_date(v : Date) {
      this.birth_date = v;
    }
    //Getter and Setter for gender
    public get gender() : string {
      return this.gender;
    }
    public set gender(v : string) {
      this.gender = v;
    }
    //Getter and Setter for ID number
    public get id_num() : number {
      return this.id_num;
    }
    public set id_num(v : number) {
      this.id_num = v;
    }
    //Getter and Setter for User Type
    public get user_type() : string {
      return this.user_type;
    }
    public set user_type(v : string) {
      this.user_type = v;
    }
}
//end of Person class
