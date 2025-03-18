import { useEffect, useState } from "react";
import { bowler } from "./types/bowler.ts";

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  useEffect(() => {
    const fetchBowler = async () => {
      const response = await fetch("https://localhost:44374/api/Bowler");
      const data = await response.json();

      setBowlers(data);
    };

    fetchBowler();
  }, []);

  // filters bowlers to only include those from "Marlins" or "Sharks"
  const filteredBowlers = bowlers.filter(
    (b) => b.team.teamName === "Marlins" || b.team.teamName === "Sharks"
  );

  return (
    <>
      <br />
      <br></br>
      <br></br>
      <h3>Bowlers</h3>
      <table>
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredBowlers.map((b) => (
            <tr key={b.bowlerID}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>{b.team.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
