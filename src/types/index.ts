export type ProfileOption = 'padre' | 'usuario' | null;

export type AgeRangeOption = 'p1' | 'p2' | 'p3' | 'e1' | 'e2' | 'b1' | 'a18' | null;

export interface AppState {
  selectedProfile: ProfileOption;
  selectedAgeRange: AgeRangeOption;
  simulatorEnabled: boolean;
}
