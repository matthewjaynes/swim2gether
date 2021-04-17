


/**
 * Athlete Class (Abstract)
 */
abstract class Athlete {

    //Athlete Class Properties
    affiliations?:   [];
    sports?:          [];
    weight?:         number;
    height?:         number;
    person_id:      number;


    /**
     * constructor for the Athlete Class
     * may not need constructor??
     *
     *
     * @param affiliations is for the teams and organizations they are affiliated with
     * @param sports is the sports that they participate or participated in
     * @param weight is the weight of the athlete
     * @param height is the height of the athlete
     * @param person_id is the equivalent person_id that will reference the person object version of this athlete (to get name, birth...)
     */
    constructor(affiliations?: [], sports?: [], weight?: number,
                height?: number, person_id: number) {

        this.affiliations = affiliations;
        this.sports = sports;
        this.weight = weight;
        this.height = height;
        this.person_id = person_id;
    }

    //Getter and Setter for affiliations
    public get affiliations() : string[] {
      return this.affiliations;
    }
    public set affiliations(v : string[]) {
      this.affiliations = v;
    }
    //Getter and Setter for sports
    public get sports() : string[] {
      return this.sports;
    }
    public set sports(v : string[]) {
      this.sports = v;
    }
    //Getter and Setter for weight
    public get weight() : number {
      return this.weight;
    }
    public set weight(v : number) {
      this.weight = v;
    }
    //Getter and Setter for height
    public get height() : number {
      return this.height;
    }
    public set height(v : number) {
      this.height = v;
    }
    //Getter and Setter for person_id
    public get person_id() : number {
      return this.person_id;
    }
    public set person_id(v : number) {
      this.person_id = v;
    }


}
//end of Athlete class
