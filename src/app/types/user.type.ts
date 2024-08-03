export interface FortesUser {
  id: string;
  name: string;
}

export type FortesUserResponse = Omit<FortesUser, 'id'>;
