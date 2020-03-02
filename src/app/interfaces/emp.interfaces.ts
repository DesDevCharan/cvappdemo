export interface Data {
  employees: Employee[];
  fromdb: boolean;
}
export interface Employee {
  id: number;
  name: string;
  age: string;
  sex: string;
  address: Address[];
}
export interface Address {
  street: string;
  postalCode: string;
  city: string;
  country: string;
  countryCode: string;
  text: string;
}
