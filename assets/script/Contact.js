class Contact {
    #Name;
    #City;
    #Email;
  
    constructor(name, city, email) {
      this.#Name = name;
      this.#City = city;
      this.#Email = email;
    }
  
    set name(name) {
      this.#Name = name;
    }
    set city(city) {
      this.#City = city;
    }
    set email(email) {
      this.#Email = email;
    }
  
    get name() {
      return this.#Name;
    }
    get city() {
      return this.#City;
    }
    get email() {
      return this.#Email;
    }
  }
  const contact = new Contact();
  
export { Contact }; 