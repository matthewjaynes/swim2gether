


//Swimmer Class which inherits from the Athlete Class
class Swimmer extends Athlete {

    //Swimmer Class Properties
    meets_attended?:     [];
    historical_times?:   string;         //Not yet implemented
    best_times?:         {};             //Not yet implemented

    /**
     * Constructor for the Swimmer Class
     *
     * @param affiliations is inherited from the Athlete Class
     * @param sports is inherited from the Athlete Class
     * @param weight is inherited from the Athlete Class
     * @param height is inherited from the Athlete Class
     * @param person_id is inherited from the Athlete Class
     *
     * @param meets_attended is a list of competitions this swimmer has participated in
     * @param historical_times is a string for now...
     * @param best_times is a dictionary of best performances in each event made by this swimmer
     */

    constructor(affiliations?: [], sports?: [], weight?: number,
                height?: number, person_id: number, meets_attended?:[],
                historical_times?: string, best_times?: Map) {

        super(affiliations, sports, weight, height, person_id); //runs constructor from parent class (Athlete)
        this.meets_attended = meets_attended;
        this.historical_times = historical_times;
        this.best_times = best_times;
    }

    //Getter and Setter for meets_attended
    public get meets_attended() : string[] {
      return this.meets_attended;
    }
    public set meets_attended(v : string[]) {
      this.meets_attended = v;
    }
    //Getter and Setter for historical times in each each event
    public get historical_times() : string {
      return this.historical_times;
    }
    public set historical_times(v : string) {
      this.historical_times = v;
    }
    //Getter and Setter for best times in each event
    public get best_times() : Map {
      return this.best_times;
    }
    public set best_times(v : Map) {
      this.best_times = v;
    }


}
//end of Swimmer class
