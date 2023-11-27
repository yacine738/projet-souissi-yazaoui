import { Affiliation } from './affiliation';

export class Personne {
  constructor(
    public cin: string,
    public nom: string,
    public prenom: string,
    public date_naissance: string,
    public adresse: string,
    public email: string,
    public telephone: string,
    public affiliation: Affiliation
  ) {}
}
