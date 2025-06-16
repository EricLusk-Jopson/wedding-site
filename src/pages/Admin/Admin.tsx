import React, { useState, FormEvent } from "react";
// import emailjs from "emailjs-com";
import { Party } from "../../types/Party";
// import { supabase } from "../../supabase/supabaseClient";

const Admin: React.FC = () => {
  const [parties, setParties] = useState<Party[]>([]);
  const [partyName, setPartyName] = useState<string>("");
  const [partySize, setPartySize] = useState<number>(0);
  const [contactEmail, setContactEmail] = useState<string>("");

  // useEffect(() => {
  //   fetchParties();
  // }, []);

  // const fetchParties = async () => {
  //   const { data, error } = await supabase.from("parties").select("*");
  //   if (error) {
  //     console.error("Error fetching parties:", error);
  //   } else {
  //     setParties(data as Party[]);
  //   }
  // };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPartyName("");
    setPartySize(0);
    setContactEmail("");
    // const token = crypto.randomUUID(); // Generate a unique token
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const { error } = await supabase.from("parties").insert([
    //   {
    //     name: partyName,
    //     max: partySize,
    //     size: partySize,
    //     email: contactEmail,
    //     token,
    //   },
    // ]);

    // if (error) {
    //   console.error("Error creating party:", error);
    // } else {
    //   sendInvitationEmail(contactEmail, token, partyName);
    //   fetchParties();
    //   setPartyName("");
    //   setPartySize(0);
    //   setContactEmail("");
    // }
  };

  // const sendInvitationEmail = (
  //   partyEmail: string,
  //   token: string,
  //   name: string
  // ) => {
  //   const templateParams = {
  //     to_email: partyEmail,
  //     to_name: name,
  //     reply_to: "eluskjopson@gmail.com",
  //     message: `Your RSVP token is: https://ericlusk-jopson.github.io/wedding-site/#/rsvp/${token}. Please use it to confirm your attendance.`,
  //   };

  //   emailjs
  //     .send(
  //       "service_xw9ftst",
  //       "template_ns5qzkx",
  //       templateParams,
  //       "iRkdbmktoPE0XEU2y"
  //     )
  //     .then((response) =>
  //       console.log("Email sent successfully!", response.status, response.text)
  //     )
  //     .catch((err) => console.error("Failed to send email:", err));
  // };

  return (
    <main
      style={{
        margin: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <section
        style={{
          width: "100vw",
          padding: "4rem 2rem",
          display: "flex",
          gap: "1rem",
          alignItems: "start",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <h2>Guest List</h2>
          <br />
          <ul>
            <h4>Immediate Family - 10</h4>
            <li>Louise and Eric Lusk-Jopson</li>
            <li>Susan Lusk and Will Jopson</li>
            <li>Vita and Ian Macdougall</li>
            <li>Cole Macdougall</li>
            <li>Elise Macdougall</li>
            <li>Miriam Macdougall</li>
            <li>Marion Jopson</li>
            <br />
            <h4>Guests of Honour - 5</h4>
            <li>Sabrina Macdougall and Clayton Mobbs</li>
            <li>Ella Worrall and Cam ??</li>
            <li>Bill Xu</li>
            <br />
            <h4>Friends - </h4>
            <li>Conor Morrison and Gustavo</li>
            <li>Noel and Taylor</li>
            <li>Dawson and Taylor</li>
            <li>Akshay and Anant</li>
            <li>Holly</li>
            <li>Eric Turko</li>
            <li>Jeff</li>
            <li>Anna + 1</li>
            <li>Denver + 1</li>
            <li>Michael and Katie</li>
            <li>Greg</li>
            <li>Colm O'Donnell and Gf</li>
            <br />
            <h4>Family - 14</h4>
            <li>Mark, Amy and Davis Jeffrey</li>
            <li>Dunc, Lanie, Paisley, Mason</li>
            <li>Jessica and Partner</li>
            <li>Marg</li>
            <li>Suzanne and Paul</li>
            <li>Carmen and Alan</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} style={{ flexGrow: 2 }}>
          <input
            type="text"
            placeholder="Party Name"
            value={partyName}
            onChange={(e) => setPartyName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Party Size"
            value={partySize}
            onChange={(e) => setPartySize(Number(e.target.value))}
          />
          <input
            type="email"
            placeholder="Contact Email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
          <button type="submit">Add Party</button>
        </form>
        <div style={{ flexGrow: 1 }}>
          <h2>Invited Parties</h2>
          <ul>
            {parties.map((party) => (
              <li key={party.id}>
                {party.name} -{" "}
                {party.confirmed
                  ? `confirmed for ${party.size} guest${
                      party.size > 1 ? "s" : ""
                    }`
                  : party.confirmed == null
                  ? "has not responded yet"
                  : "declined"}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        style={{
          width: "100vw",
          padding: "4rem 2rem",
          display: "flex",
          gap: "1rem",
          alignItems: "start",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <h2>
            {parties
              .filter((party) => party.confirmed === true)
              .reduce((acc, curr) => (acc += curr.size), 0)}{" "}
            Confirmed
          </h2>
          <ul>
            {parties
              .filter((party) => party.confirmed === true)
              .map((party) => (
                <li key={party.id}>
                  {party.name} -{" "}
                  {party.confirmed
                    ? `confirmed for ${party.size} guest${
                        party.size > 1 ? "s" : ""
                      }`
                    : party.confirmed == null
                    ? "has not responded yet"
                    : "declined"}
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2>
            {parties
              .filter((party) => party.confirmed === false)
              .reduce((acc, curr) => (acc += curr.size), 0)}{" "}
            Declined:{" "}
          </h2>
          <ul>
            {parties
              .filter((party) => party.confirmed === false)
              .map((party) => (
                <li key={party.id}>
                  {party.name} -{" "}
                  {party.confirmed
                    ? `confirmed for ${party.size} guest${
                        party.size > 1 ? "s" : ""
                      }`
                    : party.confirmed == null
                    ? "has not responded yet"
                    : "declined"}
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2>
            {parties
              .filter((party) => party.confirmed === null)
              .reduce((acc, curr) => (acc += curr.size), 0)}{" "}
            No Response
          </h2>
          <ul>
            {parties
              .filter(
                (party) =>
                  party.confirmed === undefined || party.confirmed === null
              )
              .map((party) => (
                <li key={party.id}>
                  {party.name} -{" "}
                  {party.confirmed
                    ? `confirmed for ${party.size} guest${
                        party.size > 1 ? "s" : ""
                      }`
                    : party.confirmed == null
                    ? "has not responded yet"
                    : "declined"}
                </li>
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Admin;
