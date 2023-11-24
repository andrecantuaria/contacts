class Contact {
    _Name;
    _City;
    _Email;
  
    constructor(name, city, email) {
      this._Name = name;
      this._City = city;
      this._Email = email;
    }
  
    set name(name) {
      this._Name = name;
    }
    set city(city) {
      this._City = city;
    }
    set email(email) {
      this._Email = email;
    }
  
    get name() {
      return this._Name;
    }
    get city() {
      return this._City;
    }
    get email() {
      return this._Email;
    }
  }
  const contact = new Contact();
  
//export { Contact }; 