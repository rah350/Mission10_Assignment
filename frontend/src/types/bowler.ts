export type bowler = {
  bowlerID: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit: string;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: number;
  bowlerPhoneNumber: number;
  teamID: number;
  team: Team;
};

export type Team = {
  teamID: number;
  teamName: string;
  captainID: number;
};
