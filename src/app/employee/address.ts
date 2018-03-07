export class Address{
    
      constructor(private _city:string, private _state:string, private _street:string, private _zipcode:number){
        
          }
          set city(city:string){
            this._city = city;
          }
          get city(){
            return this._city;
          }
          set state(state:string){
            this._state = state;
          }
          get state(){
            return this._state;
          }
          set street(street:string){
            this._street = street;
          }
          get street(){
            return this._street;
          }
          set zipcode(zipcode:number){
            this._zipcode = zipcode;
          }
          get zipcode(){
            return this._zipcode;
          }
    
    }