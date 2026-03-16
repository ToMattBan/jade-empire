export interface IUser {
  name: string,
  email: string
  token: string
}

export type TStatus = 'revising' | 'translated' | 'pending' | 'changedNow';

export interface IString {
  _id: string,
  soundId: string,
  status: TStatus,
  original: string,
  translated: string,
  newTranslation?: string,
  changedNow?: boolean,

  searchOriginal?: string,
  searchTranslated?: string,
}