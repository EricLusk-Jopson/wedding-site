// src/Admin.tsx
import React, { useState, useEffect, FormEvent } from "react";
import emailjs from "emailjs-com";
import { Party } from "../../types/Party";
import { supabase } from "../../supabase/supabaseClient";

const Admin: React.FC = () => {
  const [parties, setParties] = useState<Party[]>([]);
  const [partyName, setPartyName] = useState<string>("");
  const [partySize, setPartySize] = useState<number>(0);
  const [contactEmail, setContactEmail] = useState<string>("");

  useEffect(() => {
    fetchParties();
  }, []);

  const fetchParties = async () => {
    const { data, error } = await supabase.from("parties").select("*");
    if (error) {
      console.error("Error fetching parties:", error);
    } else {
      setParties(data as Party[]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const token = crypto.randomUUID(); // Generate a unique token

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { error } = await supabase
      .from("parties")
      .insert([
        { name: partyName, size: partySize, email: contactEmail, token },
      ]);

    if (error) {
      console.error("Error creating party:", error);
    } else {
      sendInvitationEmail(contactEmail, token, partyName);
      fetchParties();
      setPartyName("");
      setPartySize(0);
      setContactEmail("");
    }
  };

  const sendInvitationEmail = (
    partyEmail: string,
    token: string,
    name: string
  ) => {
    const templateParams = {
      to_email: partyEmail,
      to_name: name,
      message: `Your RSVP token is: http://localhost:3000/rsvp/${token}. Please use it to confirm your attendance.`,
    };

    emailjs
      .send(
        "service_xw9ftst",
        "template_ns5qzkx",
        templateParams,
        "iRkdbmktoPE0XEU2y"
      )
      .then((response) =>
        console.log("Email sent successfully!", response.status, response.text)
      )
      .catch((err) => console.error("Failed to send email:", err));
  };

  return (
    <div>
      <h2>Manage Parties</h2>
      <ul>
        {parties.map((party) => (
          <li key={party.id}>{party.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Admin;
