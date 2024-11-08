export type Persona = {
    nombre : string,
    email : string,
    telefono : number,
    amigos : PersonModel[],
};
export type PersonModel = {
    personas : Persona[]
};